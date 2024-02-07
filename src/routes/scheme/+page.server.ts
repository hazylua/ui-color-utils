import { Scheme, argbFromHex, hexFromArgb } from '@material/material-color-utilities';
import type { PageServerLoad } from './$types';

const hexColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

function throwErr(msg: string | null) {
  return {
    err: msg ?? 'Invalid params.'
  };
}

export const load: PageServerLoad = ({ url }) => {
  if (url.searchParams) {
    const color = url.searchParams.get('color');
    const theme = url.searchParams.get('theme');

    if (color != null) {
      if (hexColorRegex.test(color)) {
        const argb = argbFromHex(color);

        let scheme;
        if (theme != null) {
          scheme = theme === 'light' ? Scheme.light(argb) : Scheme.dark(argb);
        } else {
          return throwErr(null);
        }

        const arr = Object.entries(scheme.toJSON()).map((entry) => [
          entry[0],
          hexFromArgb(entry[1])
        ]);

        return {
          color,
          theme,
          scheme: arr,
          json: JSON.stringify(
            arr.reduceRight((prev, curr) => {
              return { [curr[0]]: curr[1], ...prev };
            }, {}),
            null,
            1
          )
        };
      } else {
        return throwErr(null);
      }
    }
  }
  return {};
};