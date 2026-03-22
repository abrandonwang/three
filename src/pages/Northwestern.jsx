import { useState, useEffect } from 'react'
import PageLayout from '../components/PageLayout'

const QUARTERS = ['Fall 2025', 'Winter 2026', 'Spring 2026']
const CATEGORIES = ['Computer Science', 'Engineering Analysis', 'Design']

const COURSES = [
  {
    id: 'cs111',
    code: 'CS 111',
    title: 'Introduction to Computer Science',
    quarter: 'Fall 2025',
    category: 'Computer Science',
    description: 'Foundational programming concepts using Python. Covers variables, control flow, functions, recursion, and basic data structures with an emphasis on computational thinking and problem decomposition.',
    tags: ['Python', 'Algorithms', 'Problem Solving'],
  },
  {
    id: 'cs150',
    code: 'CS 150',
    title: 'Fundamentals of Computer Science 1.5',
    quarter: 'Fall 2025',
    category: 'Computer Science',
    description: 'A bridge course between introductory and intermediate programming. Emphasizes object-oriented design, recursion, and software structure in Python.',
    tags: ['Python', 'OOP', 'Recursion'],
  },
  {
    id: 'ea1',
    code: 'EA 1',
    title: 'Engineering Analysis I',
    quarter: 'Fall 2025',
    category: 'Engineering Analysis',
    description: 'Single-variable calculus for engineers. Limits, derivatives, integrals, and their applications to physical systems including optimization and motion analysis.',
    tags: ['Calculus', 'Derivatives', 'Integration'],
  },
  {
    id: 'ea2',
    code: 'EA 2',
    title: 'Engineering Analysis II',
    quarter: 'Winter 2026',
    category: 'Engineering Analysis',
    description: 'Multivariable calculus and linear algebra. Partial derivatives, vector fields, matrix operations, and systems of equations with engineering applications.',
    tags: ['Multivariable Calculus', 'Linear Algebra', 'Vectors'],
  },
  {
    id: 'cs214',
    code: 'CS 214',
    title: 'Data Structures',
    quarter: 'Winter 2026',
    category: 'Computer Science',
    description: 'Core data structures and algorithm analysis. Trees, heaps, hash tables, graphs, sorting algorithms, and Big-O complexity implemented in C++.',
    tags: ['C++', 'Algorithms', 'Big-O', 'Trees'],
  },
  {
    id: 'cs212',
    code: 'CS 212',
    title: 'Mathematical Foundations of CS',
    quarter: 'Winter 2026',
    category: 'Computer Science',
    description: 'Discrete mathematics for computer scientists. Logic, proof techniques, sets, relations, graphs, and combinatorics.',
    tags: ['Discrete Math', 'Proofs', 'Graph Theory'],
  },
  {
    id: 'dsgn1',
    code: 'DSGN 1',
    title: 'Design Thinking I',
    quarter: 'Winter 2026',
    category: 'Design',
    description: 'Introduction to human-centered design methodology. Emphasis on needfinding, ideation, and low-fidelity prototyping to solve real user problems.',
    tags: ['HCD', 'Prototyping', 'Ideation'],
  },
  {
    id: 'ea3',
    code: 'EA 3',
    title: 'Engineering Analysis III',
    quarter: 'Spring 2026',
    category: 'Engineering Analysis',
    description: 'Differential equations and their applications. First and second-order ODEs, Laplace transforms, and systems of equations.',
    tags: ['Differential Equations', 'ODEs', 'Laplace Transforms'],
  },
  {
    id: 'cs211',
    code: 'CS 211',
    title: 'Fundamentals of Computer Science II',
    quarter: 'Spring 2026',
    category: 'Computer Science',
    description: 'Systems-level programming in C. Memory management, pointers, linked structures, and an introduction to operating systems concepts.',
    tags: ['C', 'Memory Management', 'Systems'],
  },
  {
    id: 'dsgn2',
    code: 'DSGN 2',
    title: 'Design Thinking II',
    quarter: 'Spring 2026',
    category: 'Design',
    description: 'Advanced design process with focus on user testing, iteration, and high-fidelity prototyping. Culminates in a full design sprint addressing a real-world challenge.',
    tags: ['User Testing', 'Figma', 'Iteration'],
  },
  {
    id: 'cs349',
    code: 'CS 349',
    title: 'Machine Learning',
    quarter: 'Spring 2026',
    category: 'Computer Science',
    description: 'Supervised and unsupervised learning, neural networks, and model evaluation. Projects in regression, classification, and clustering using Python.',
    tags: ['Python', 'Neural Networks', 'scikit-learn', 'Regression'],
  },
]

export default function Northwestern() {
  const [activeQuarter, setActiveQuarter] = useState('All')
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => { setExpandedId(null) }, [activeQuarter, activeCategory])

  const filtered = COURSES.filter(c =>
    (activeQuarter === 'All' || c.quarter === activeQuarter) &&
    (activeCategory === 'All' || c.category === activeCategory)
  )

  const grouped = QUARTERS
    .filter(q => filtered.some(c => c.quarter === q))
    .map(q => ({ quarter: q, courses: filtered.filter(c => c.quarter === q) }))

  return (
    <PageLayout title="Northwestern University" subtitle="Major-Related Class History">
      <div className="rounded-xl border border-zinc-200 dark:border-white/10 overflow-hidden">

        {/* Filters header */}
        <div className="px-4 pt-4 pb-3 border-b border-zinc-200 dark:border-white/10 space-y-3">
          <div className="flex gap-1 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {['All', ...QUARTERS].map(q => (
              <button
                key={q}
                onClick={() => setActiveQuarter(q)}
                className={`px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition-colors ${
                  activeQuarter === q
                    ? 'text-[#3b82f6] bg-blue-50 dark:bg-blue-500/10'
                    : 'text-zinc-500 dark:text-white/60 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {q}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', ...CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded-md text-[12px] font-medium border transition-colors ${
                  activeCategory === cat
                    ? 'text-[#3b82f6] border-[#3b82f6]/60 bg-blue-50 dark:bg-blue-500/10'
                    : 'text-zinc-500 dark:text-white/60 border-zinc-300 dark:border-white/20 hover:border-zinc-500 dark:hover:border-white/40 hover:text-zinc-800 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course list */}
        {grouped.length === 0 ? (
          <p className="text-[15px] text-zinc-400 dark:text-white/30 px-4 py-6">No courses for this filter.</p>
        ) : (
          grouped.map(({ quarter, courses }) => (
            <div key={quarter}>
              {activeQuarter === 'All' && (
                <div className="px-4 py-2 bg-zinc-50 dark:bg-white/[0.03] border-b border-zinc-200 dark:border-white/10">
                  <span className="text-[11px] uppercase tracking-widest text-zinc-500 dark:text-white/50 font-semibold">
                    {quarter}
                  </span>
                </div>
              )}
              {courses.map(course => {
                const isOpen = expandedId === course.id
                return (
                  <div key={course.id} className="border-b border-zinc-100 dark:border-white/5 last:border-none">
                    <button
                      onClick={() => setExpandedId(isOpen ? null : course.id)}
                      className="group w-full text-left px-4 py-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-baseline gap-3 min-w-0">
                          <span className="text-[15px] font-medium text-zinc-900 dark:text-white group-hover:text-[#3b82f6] transition-colors shrink-0">
                            {course.code}
                          </span>
                          <span className="text-[15px] text-zinc-600 dark:text-white/70 truncate">
                            {course.title}
                          </span>
                        </div>
                        <span className="text-[12px] text-zinc-400 dark:text-white/40 group-hover:text-[#3b82f6] transition-colors shrink-0">
                          {isOpen ? '↑' : '↓'}
                        </span>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 bg-zinc-50 dark:bg-white/[0.03]">
                        <p className="text-[15px] text-zinc-600 dark:text-white/80 leading-relaxed mb-4">
                          {course.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {course.tags.map(tag => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md text-[12px] font-medium text-zinc-600 dark:text-white/60 bg-zinc-200 dark:bg-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))
        )}

      </div>
    </PageLayout>
  )
}
