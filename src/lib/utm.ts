const FORM_BASE = 'https://formsinfluentes.blankschool.com.br/';

export function getFormUrl(): string {
  const params = new URLSearchParams(window.location.search);
  const utmParams = new URLSearchParams();
  params.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      utmParams.set(key, value);
    }
  });
  const qs = utmParams.toString();
  return qs ? `${FORM_BASE}?${qs}` : FORM_BASE;
}
