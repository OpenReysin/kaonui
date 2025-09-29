FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN pnpm add -D turbo@^2.5.5
COPY . .

# Generate a partial monorepo with a pruned lockfile for a target workspace.
# Assuming "docs" is the name entered in the project's package.json: { name: "docs" }
RUN pnpm turbo prune docs --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install the dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile

# Build the project
COPY --from=builder /app/out/full/ .
RUN pnpm turbo run build

FROM nginx:alpine AS runner

# Copy the built application from installer
# Astro static builds go to dist by default
COPY --from=installer /app/apps/docs/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]