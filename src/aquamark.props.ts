export type AquamarkProps = {

}

const defaultProps = (): AquamarkProps => ({})
export function defineProps(props: AquamarkProps) {
  return props || defaultProps()
}