const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ["@react-email/components", "@react-email/render", "@react-email/html"],
	},
	transpilePackages: ["@react-email/components", "@react-email/render", "@react-email/html"],
};

module.exports = withNextIntl(nextConfig);
