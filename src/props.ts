export type AquamarkProps = {
  content: string
}

const defaultProps = (): AquamarkProps => ({
  content: 'Aquamark'
})
export const defineProps = (props: AquamarkProps = defaultProps()) => props