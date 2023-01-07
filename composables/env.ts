export default function useEnv() {
  const config = useRuntimeConfig()
  return {
    severApi: `${config.public.severProtocol}://${config.public.severDomain}:${config.public.severPort}`
  }
}