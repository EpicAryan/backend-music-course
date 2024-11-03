
import { z } from 'zod';

export const VideoSchema = z.object({
  video_id: z.string(),
  module_id: z.string(),
  title: z.string(),
  description: z.string().nullable().optional(),
  duration: z.number().optional(),
  thumbnail_url: z.string().optional(),
  vimeo_url: z.string(),
});

export type VideoSchemaType = z.infer<typeof VideoSchema>;
