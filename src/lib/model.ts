export type PostCategory = 'project' | 'tool';

export type WorkExperience = {
   company: {
      name: string;
      logo: string;
      website: string;
   };
   position: string;
   description: string;
   location: string;
   timespan: {
      startDate: Date;
      endDate: Date | undefined;
   };
};

export type Skill = {
   title: string;
   svgPath: string;
   link: string;
}

export type LinkIcon = {
   title: string;
   svgPath: string;
   link: string;
}

export type Post = {
   slug: string;
   title: string;
   description: string;
   date: Date;
   category: PostCategory[];
   published: boolean;
   youtubeURL?: string;
};

// This function should return true if the data contains
// all non-optional properties of a post (minus the slug).
export function missingPostProps(frontMatter: any) {
   const requiredProperties = [
      'title',
      'description',
      'date',
      'category',
      'published',
   ];
   const missingProperties = requiredProperties.filter(
      (prop) => frontMatter[prop] === undefined || frontMatter[prop] === null
   );
   return missingProperties;
}
