import PAST_ROLES from '@/data/experience'

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      {PAST_ROLES.map((role) => (
        <div className="mb-8" key={`${role.company}-${role.role}`}>
          <h3 className="text-lg font-heading sm:text-xl">
            {role.role} @ {role.company}
          </h3>

          <p className="mb-4 mt-0.5 text-sm">
            {role.startDate} - {role.endDate}
          </p>
          <p>{role.description}</p>

          {role.link && (
            <a
              href={role.link}
              className="text-blue-500 hover:underline"
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
