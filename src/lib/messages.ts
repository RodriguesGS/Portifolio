
export async function loadMessages(locale: string | undefined) {
  const lang = locale ?? "pt";
  return (await import(`../../messages/${lang}.json`)).default;
}