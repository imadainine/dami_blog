import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zrytr7mz",
  dataset: "production",
  apiVersion: "2022-01-01",
  useCdn: true,
  token:
    "sk9IHYkMKtGynhu9dSqVWcXDKHy56EoMOyjoWaqOJleJcXXmeUjcwTlz4vz6H9DHsTpGAIJMkzy1DnYuAe9MjklRjmIjra2504kMp4OLlouR9SqDb0A91HOAOnqvpNdgACX4fNzynPBeNQp3iPkecKXe2OM4oc5bY6jGbvTi7oAWbaANbOWv",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
