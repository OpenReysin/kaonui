import { defineComponent, h } from 'vue';
import '@kaonui/lit-components';

export interface KaonButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

export const KaonButton = defineComponent<KaonButtonProps>({
  name: 'KaonButton',
  props: {
    variant: {
      type: String as () => 'primary' | 'secondary' | 'danger',
      default: 'primary',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const handleClick = (event: CustomEvent) => {
      emit('click', event.detail.originalEvent);
    };

    return () =>
      h(
        'kaon-button',
        {
          variant: props.variant,
          disabled: props.disabled,
          onKaonClick: handleClick,
        },
        slots.default?.()
      );
  },
});