/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/x',
                destination: 'https://twitter.com/nikunja__',
                permanent: false,
              },
              {
                source: '/reddit',
                destination: 'https://www.reddit.com/user/NikunjaSarma',
                permanent: false,
              },
              {
                source: '/discord',
                destination: 'https://discordapp.com/users/396122165734539265',
                permanent: false,
              },
              {
                source: '/github',
                destination: 'https://github.com/Nikunja-Sharma',
                permanent: false,
              },
              {
                source: '/instagram',
                destination: 'https://instagram.com/nikunja___',
                permanent: false,
              },
              {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/nikunja-sarma',
                permanent: false,
              },
              {
                source: '/twitch',
                destination: 'https://www.twitch.tv/xnikunja',
                permanent: false,
              },
        ];
      },
};

export default nextConfig;
