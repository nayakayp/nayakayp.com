import sanityClient from "@sanity/client";

export const client = sanityClient({
	projectId: "9x6zj43p",
	dataset: "production",
	apiVersion: "2022-06-11",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
