export type AquamarkProps = {
  content: string
}

const defaultProps = (): AquamarkProps => ({
  content: 'Aquamark'
})
export function defineProps(props: AquamarkProps = defaultProps()) {
  return props
}