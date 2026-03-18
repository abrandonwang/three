import PageLayout from '../components/PageLayout'

const courses = {
  'Computer Science': [
    'CS 111 · Introduction to Computer Science',
    'CS 150 · Fundamentals 1.5',
    'CS 211 · Fundamentals of Computer Science II',
    'CS 212 · Mathematical Foundations of CS',
    'CS 214 · Data Structures',
    'CS 349 · Machine Learning',
  ],
  'Engineering Analysis': [
    'EA 1 · Engineering Analysis I',
    'EA 2 · Engineering Analysis II',
    'EA 3 · Engineering Analysis III',
  ],
  'Design': [
    'DSGN 1 · Design Thinking I',
    'DSGN 2 · Design Thinking II',
  ],
}

export default function Northwestern() {
  return (
    <PageLayout
      title="Northwestern University"
      subtitle="Class History"
    >
      <div className="space-y-8">
        {Object.entries(courses).map(([category, list]) => (
          <div key={category}>
            <h3 className="text-[12px] uppercase tracking-widest text-zinc-400 dark:text-white/40 font-semibold mb-3">
              {category}
            </h3>
            <ul className="space-y-2">
              {list.map(course => (
                <li key={course} className="text-[16px] text-zinc-700 dark:text-white/80">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
