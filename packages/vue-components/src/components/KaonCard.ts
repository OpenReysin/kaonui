import { defineComponent, h } from 'vue';
import '@kaonui/lit-components';

export interface KaonCardProps {
  title?: string;
}

export const KaonCard = defineComponent<KaonCardProps>({
  name: 'KaonCard',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'kaon-card',
        {
          title: props.title,
        },
        {
          default: () => slots.default?.(),
          footer: () => slots.footer?.(),
        }
      );
  },
});