import localFont from 'next/font/local';

export const helveticaFont = localFont({
  src: [
    {
      path: './helvetica/HelveticaNeueLTGEO-55Roman.7f4026be.ttf',
      style: 'normal',
      weight: '400',
    },
    {
      path: './helvetica/HelveticaNeueLTGEO-75Bold.59589e87.ttf',
      style: 'normal',
      weight: '700',
    },
  ],
  variable: '--helv-font',
  display: 'swap',
});
