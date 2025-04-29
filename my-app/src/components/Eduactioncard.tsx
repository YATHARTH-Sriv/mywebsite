import { Badge } from "@/components/ui/badge"
import { Card,CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Education = () => {
  const educationItems = [
    {
      id: 1,
      title: "BITS Pilani",
      institution: "Engineering",
      period: "2022-2026",
    },
  ]

  return (
    <section id="education" className="space-y-4"> {/* Reduced spacing */}
      <h2 className="text-xl font-bold mb-4 border-b border-zinc-800 pb-2">Education & Experience</h2> {/* Smaller heading */}
      <div className="grid md:grid-cols-2 gap-4"> {/* Changed to 2 columns and reduced gap */}
        {educationItems.map((item) => (
          <Card key={item.id} className="bg-zinc-900 border-zinc-800">
            <CardHeader className="p-4"> {/* Reduced padding */}
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-base">{item.title}</CardTitle> {/* Smaller title */}
                  <CardDescription className="text-gray-400 text-xs">{item.institution}</CardDescription> {/* Smaller text */}
                </div>
                <Badge variant="outline" className="text-xs">{item.period}</Badge> {/* Smaller badge */}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Education