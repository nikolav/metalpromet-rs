export const useImagePreload = (options: {
  images: string[];
  fetchpriority?: "high" | "low" | "auto";
  prefetch?: boolean;
}) =>
  useHead({
    link: options.images.map((href) => ({
      rel: "preload",
      as: "image",
      href,
      fetchpriority: options.fetchpriority,
    })),
  });

export const useImagePrefetch = (options: { images: string[] }) =>
  useHead({
    link: options.images.map((href) => ({
      rel: "prefetch",
      as: "image",
      href,
    })),
  });
