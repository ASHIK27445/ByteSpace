import React from "react";
import { Link } from "react-router";

export interface Course {
  slug: string;
  title: string;
  creator: string;
  creatorSlug: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  students: string;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  thumbFrom: string; // tailwind gradient "from-*"
  thumbTo: string; // tailwind gradient "to-*"
}

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    creator: "purepearl studio",
    creatorSlug: "purepearl-studio",
    rating: 4.5,
    level: "Beginner",
    students: "26+",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    thumbFrom: "from-sky-400",
    thumbTo: "to-amber-200",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    creator: "purepearl studio",
    creatorSlug: "purepearl-studio",
    rating: 4.5,
    level: "Beginner",
    students: "26+",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    thumbFrom: "from-slate-300",
    thumbTo: "to-slate-50",
  },
  {
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    creator: "purepearl studio",
    creatorSlug: "purepearl-studio",
    rating: 4.5,
    level: "Beginner",
    students: "26+",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    thumbFrom: "from-slate-900",
    thumbTo: "to-cyan-700",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    creator: "purepearl studio",
    creatorSlug: "purepearl-studio",
    rating: 4.5,
    level: "Beginner",
    students: "26+",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    thumbFrom: "from-neutral-800",
    thumbTo: "to-slate-400",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    creator: "purepearl studio",
    creatorSlug: "purepearl-studio",
    rating: 4.5,
    level: "Beginner",
    students: "26+",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    thumbFrom: "from-slate-50",
    thumbTo: "to-emerald-400",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    creator: "purepearl studio",
    creatorSlug: "purepearl-studio",
    rating: 4.5,
    level: "Beginner",
    students: "26+",
    price: 25,
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    thumbFrom: "from-pink-200",
    thumbTo: "to-amber-200",
  },
];

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line-100 bg-white">
      <Link to={`/courses/${course.slug}`}>
        <div
          className={`flex h-40 items-end justify-between gap-1.5 bg-gradient-to-br ${course.thumbFrom} ${course.thumbTo} p-3`}
        >
          <span className="rounded-full bg-white/85 px-2 py-0.5 text-[11px] text-ink">
            {course.lessons} Lessons
          </span>
          <span className="rounded-full bg-white/85 px-2 py-0.5 text-[11px] text-ink">{course.duration}</span>
          <span className="rounded-full bg-white/85 px-2 py-0.5 text-[11px] text-ink">
            {course.comments} Comments
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[16px] font-semibold">
            <Link to={`/courses/${course.slug}`}>{course.title}</Link>
          </h3>
          <span className="shrink-0 text-xs text-muted">★ {course.rating}</span>
        </div>

        <Link to={`/creators/${course.creatorSlug}`} className="text-xs text-muted hover:text-ink">
          by {course.creator}
        </Link>

        <div className="flex items-center gap-2 text-xs text-muted">
          <span>{course.level}</span>
          <span className="flex items-center">
            <i className="-ml-0 h-6 w-6 rounded-full border-2 border-white bg-pink-300" />
            <i className="-ml-2 h-6 w-6 rounded-full border-2 border-white bg-indigo-200" />
            <i className="-ml-2 h-6 w-6 rounded-full border-2 border-white bg-amber-300" />
            <em className="-ml-2 rounded-full bg-brand-lime px-2 py-0.5 text-[11px] font-semibold not-italic text-ink">
              {course.students}
            </em>
          </span>
        </div>

        <div className="mt-auto flex items-baseline gap-1">
          <b className="text-lg font-bold">${course.price}</b>
          <span className="text-[11px] text-muted">/lifetime</span>
        </div>
      </div>
    </article>
  );
}