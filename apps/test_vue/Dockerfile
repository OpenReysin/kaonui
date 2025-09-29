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
# Assuming "web" is the name entered in the project's package.json: { name: "web" }
RUN pnpm turbo prune test_vue --docker

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

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 viteuser
USER viteuser

# Copy the built application from installer
COPY --from=installer --chown=viteuser:nodejs /app/apps/web/dist ./apps/web/dist

# Install a simple static file server
RUN pnpm add -g serve

# Expose port (Vite preview default is 4173, but serve uses 3000 by default)
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", "apps/web/dist", "-l", "3000"]