import React from 'react';
import images from '../constants/images';

const blogPostsData = [
  {
    id: 1,
    image: images.network,
    categories: ['Career', 'Job Search', 'LinkedIn'],
    title: '10 Expert Tips to Network on LinkedIn & Boost Your Career in 2025',
    excerpt: 'Why This LinkedIn Networking Tips Matters? In today\'s digital era, a Strategy for LinkedIn networking is essential for career growth. For those seeking a new job, mentorship, or industry insights, LinkedIn offers an unmatched platform to connect with professionals, showcase your expertise, and expand your network strategically. By cultivating meaningful relationships, you gain access to...',
    slug: '/blog/linkedin-networking-tips',
  },
  {
    id: 2,
    image: images.connect,
    categories: ['Career', 'Job Search', 'LinkedIn'],
    title: 'How to Connect with Decision Makers and Top Recruiters on LinkedIn',
    excerpt: 'There is no social network more relevant than LinkedIn when it comes to connecting with recruiters for employment. LinkedIn is the recruiter\'s go-to platform for finding and vetting candidates. According to SocialTalent\'s 2017 Global Recruiting Survey, 98% of recruiters use it as a sourcing tool. As a professional looking to network with decision-makers and top recruiters,...',
    slug: '/blog/connect-with-recruiters',
  },
  {
    id: 3,
    image: images.coach,
    categories: ['Career'],
    title: 'A Short Guide to Help You With Your Career Change',
    excerpt: 'A Short Guide to Help You With Your Career Change If you are presently pondering on careers to switch to, then you are not alone. There is no doubt that many people consider career changes for various reasons. However, it is worth noting that there are several crucial steps for you to take to figure...',
    slug: '/blog/career-change-guide',
  },
];

const BlogCard = ({ post }) => {
  return (
    <a href={post.slug} className="group block bg-slate-50 rounded-lg overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={`Featured image for ${post.title}`}
          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">
          {post.categories.join(' | ')}
        </p>
        <h3 className="mt-2 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
};

const BlogSection = () => {
  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional: Add a section title here if needed */}
        {/*
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            From Our Blog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Insights and advice to help you navigate your career path.
          </p>
        </div>
        */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;