
export async function loadMessages(locale: string | undefined) {
  const lang = locale ?? "pt";
  return (await import(`../../i18n/${lang}.json`)).default;
}