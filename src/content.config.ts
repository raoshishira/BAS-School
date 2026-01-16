import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Homepage Collection Schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string().optional(),
      image: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        })
        .optional(),
    }),
    key_features: z.object({
      title: z.string(),
      description: z.string(),
      feature_list: z
        .array(
          z.object({
            icon: z.string(),
            title: z.string(),
            content: z.string(),
          }),
        )
        .optional(),
    }),

    service: z.object({
      homepage_tab: z.object({
        title: z.string(),
        description: z.string(),
        tab_list: z
          .array(
            z.object({
              title: z.string(),
              icon: z.string(),
              image: z.string(),
            }),
          )
          .optional(),
      }),

      our_service: z.array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          image: z.string().optional(),
          list: z.array(z.string()).optional(),
          video: z
            .object({
              thumbnail: z.string(),
              video_id: z.string(),
            })
            .optional(),
          button: z
            .object({
              label: z.string(),
              link: z.string(),
              enable: z.boolean().default(true),
            })
            .optional(),
        }),
      ),
    }),
    testimonial: z.object({
      title: z.string(),
      description: z.string(),
      testimonial_list: z
        .array(
          z.object({
            author: z.string(),
            avatar: z.string(),
            organization: z.string(),
            rating: z.enum(["one", "two", "three", "four", "five"]),
            content: z.string(),
          }),
        )
        .optional(),
    }),
  }),
});

// About Collection Schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    page_title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    buttons: z.array(
      z.object({
        label: z.string(),
        link: z.string(),
        outline: z.boolean().optional(),
        enable: z.boolean().default(true),
      }),
    ),

    // Counter
    counter: z.array(
      z.object({
        name: z.string(),
        number: z.union([z.number(), z.string()]), // Support both numeric and string types (e.g., 'M', 'K')
        measurement: z.string(),
        color: z.string(),
      }),
    ),

    // Gallery
    gallery: z.object({
      title: z.string(),
      images: z.array(z.string()),
    }),

    // Our Work
    features: z.object({
      title: z.string(),
      button: z.object({
        label: z.string(),
        link: z.string(),
        enable: z.boolean().default(true),
      }),
      features_list: z.array(
        z.object({
          title: z.string(),
          content: z.string(),
        }),
      ),
    }),

    // Team Members
    members: z.object({
      title: z.string(),
      description: z.string(),
      member_list: z.array(
        z.object({
          name: z.string(),
          field: z.string(),
          image: z.string(),
        }),
      ),
    }),
  }),
});

// Features collections schema
const featuresCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/features" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string(),
          enable: z.boolean().default(true),
        })
        .optional(),
    }),

    // Project Management Section
    project_management: z.object({
      title: z.string(),
      content: z.string(),
      management: z.object({
        title: z.string(),
        projects: z
          .array(
            z.object({
              title: z.string(),
              content: z.string(),
              icon: z.string(),
            }),
          )
          .optional(),
      }),

      // Feature Service Section
      feature_service: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        list: z.array(z.string()).optional(),
        buttons: z.array(
          z.object({
            label: z.string(),
            link: z.string(),
            enable: z.boolean().default(true),
            outline: z.boolean().optional(),
          }),
        ),
      }),

      // Feature Tab Section
      feature_tab: z.object({
        title: z.string(),
        list: z
          .array(
            z.object({
              title: z.string(),
              content: z.string(),
              image: z.string(),
            }),
          )
          .optional(),
      }),
    }),
  }),
});

// Contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/-*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    page_title: z.string(),
    image: z.string().optional(),
  }),
});

// Not-found collection schema
const notFoundCollection = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "src/content/not-found" }),
  schema: z.object({
    title: z.string(),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  about: aboutCollection,
  features: featuresCollection,
  contact: contactCollection,
  "not-found": notFoundCollection,
};
