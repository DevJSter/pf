import PAST_ROLES from '@/data/experience'

interface Role {
  id: string
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  link?: string
}

export default function Experience() {
  // Function to format description with each sentence on a new line
  const formatDescription = (description: string): React.ReactNode => {
    // Split by sentence endings (., ?, !) followed by a space
    // This regex captures sentence endings while preserving them
    const sentences = description.replace(/([.?!])\s+/g, '$1\n');
    
    // Return the formatted text with preserved line breaks
    return sentences;
  };

  return (
    <div className="mb-16">
      {[...PAST_ROLES].reverse().map((role: Role) => (
        <div className="mb-8" key={role.id}>
          <h3 className="text-lg font-heading sm:text-xl">
            {role.role} @ {role.company}
          </h3>

          <p className="mb-4 mt-0.5 text-sm">
            {role.startDate} - {role.endDate}
          </p>
          
          {/* Render the description with line breaks */}
          <div className="whitespace-pre-line">
            {formatDescription(role.description)}
          </div>

          {role.link && (
            <a
              href={role.link}
              className="text-blue-500 hover:underline hover:text-red-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {role.link}
            </a>
          )}
        </div>
      ))}
    </div>
  )
}