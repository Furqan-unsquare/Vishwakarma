import Footer from '@/components/Footer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/figures')({
  component: RouteComponent,
})

// Top 8 with images
const topFigures = [
  
  { name: 'Late. Angad Bagedu Vishwakarma', role: 'Founder', img: '/1.png', desc: '' },
  { name: 'Late. Bhuidhar Katwaru Vishwakarma', role: 'Founder', img: '/2.png', desc: '' },
  { name: 'Mr. Kalpanath Bagedu Vishwakarma', role: 'Founder', img: '/3.png', desc: '' },
  { name: 'Mr. Nanhelal Mangruram Vishwakarma', role: 'Founder', img: '/4.png', desc: '' },
  { name: 'Mr. Ramlal Mangruram Vishwakarma', role: 'Founder/Vice President', img: '/5.png', desc: '' },
  { name: 'Ramjeet Vishwakarma', role: 'President', img: '/6.png', desc: '' },
  { name: 'Shivsagar Vishwakarma', role: 'Treasurer', img: '/7.png', desc: '' },
  { name: 'Parshuram Vishwakarma', role: 'Executive Chairman' , img: '/8.png', desc: '' },
]


// Remaining members (no images)
const otherMembers = [
  { name: 'Manoj Vishwakarma', role: 'Administrator' },
  { name: 'Virendra Vishwakarma', role: 'Administrator' },
  { name: 'Tribhuvan Sharma', role: 'Administrator' },
  { name: 'Jiyalal Vishwakarma', role: 'Conductor' },
  { name: 'Mata Prasad Vishwakarma', role: 'Conductor' },
  { name: 'Bhim Vishwakarma', role: 'Conductor' },
  { name: 'Ramlal Vishwakarma', role: 'Founder/Vice President' },
  { name: 'Ramsambhar Vishwakarma', role: 'Joint Secretary' },
  { name: 'Indrajeet Vishwakarma', role: 'Deputy Treasurer' },
  { name: 'Parasnath Vashwakarma', role: 'Deputy Executive Chairman' },
  { name: 'Bhagwandeen Sharma', role: 'Administrator' },
  { name: 'Santosh Vishwakarma', role: 'Manager' },
  { name: 'Suresh Vishwakarma', role: 'Administrator' },
  { name: 'Shivkumar Vishwakarma', role: 'Conductor' },
  { name: 'Omprakash Vishwakarma', role: 'Conductor' },
  { name: 'Rampyare Vishwakarma', role: 'Conductor' },
  { name: 'Chauthiram Vishwakarma', role: 'Vice President' },
  { name: 'Kalpanath Vishwakarma', role: 'Founder' },
  { name: 'Ashok Vishwakarma', role: 'Deputy Treasurer' },
  { name: 'Deepak Vishwakarma', role: 'Youth President' },
  { name: 'Kanhaiya Prasad Vishwakarma', role: 'Administrator' },
  { name: 'Satyanarayan Vishwakarma', role: 'Administrator' },
  { name: 'Ramvilas Vishwakarma', role: 'Administrator' },
  { name: 'Brijraj Vishwakarma', role: 'Conductor' },
  { name: 'Sujeet Vishwakarma', role: 'Conductor' },
  { name: 'Pyarelal Vishwakarma', role: 'Conductor' },
  
  // Special Associate Members
  { name: 'Mr. Kamala Prasad Vishwakarma', role: 'Special Associate Member - Rabale' },
  { name: 'Mr. Laljiram Vishwakarma', role: 'Special Associate Member - Yogihil, Mulund' },
  { name: 'Mr. Prakash Yadav', role: 'Special Associate Member - Vijay Garden' },
  { name: 'Mr. Shiv Kumar Chauhan', role: 'Special Associate Member - Kalher' },
  { name: 'Mr. Lawyer Vishwakarma', role: 'Special Associate Member - Diva' },
  { name: 'Mr. Hiralal Vishwakarma', role: 'Special Associate Member - Datwadi, Kalva' },
  { name: 'Mr. Vijay Vishwakarma', role: 'Special Associate Member - Mulund' },
  { name: 'Mr. Radheshyam Sharma', role: 'Special Associate Member - Chirag Nagar' },
  { name: 'Mr. Mata Prasad Vishwakarma', role: 'Special Associate Member - Rabale' },
  { name: 'Mr. Ramji Vishwakarma', role: 'Special Associate Member - Rabale' },
  { name: 'Mr. Babulal Vishwakarma', role: 'Special Associate Member - Kalwa' },
  { name: 'Mr. Arjun Sahani', role: 'Special Associate Member - Indiranagar' },
  { name: 'Mr. Shivkumar Mallah', role: 'Special Associate Member - Dhokali Naka' },
  { name: 'Mr. Triloki Prasad Gupta', role: 'Special Associate Member - Sambhaji Nagar' },
  { name: 'Mr. Rajkumar Vishwakarma', role: 'Special Associate Member - Ghansoli' },
  { name: 'Mr. Lavkush Sharma', role: 'Special Associate Member - Ghansoli' },
  { name: 'Mr. Aaskaran Singh', role: 'Special Associate Member - Yashraj Park' },
  { name: 'Mr. Tribhuvan Vishwakarma', role: 'Special Associate Member - Shivashakti Nagar' },
  { name: 'Mr. Umashankar Vishwakarma', role: 'Special Associate Member - Mutrasheth, Dombivali' },
  { name: 'Mr. Sunil Vishwakarma', role: 'Special Associate Member - Kisnagar' },
  { name: 'Mr. Ghanshyam Vishwakarma', role: 'Special Associate Member - Worlipada' },
  { name: 'Mr. Ramji Vishwakarma', role: 'Special Associate Member - Goregaon' },
  { name: 'Mr. Balgovind Vishwakarma', role: 'Special Associate Member - Universe' },
  { name: 'Mr. Ramlochan Vishwakarma', role: 'Special Associate Member - Ghodbandar Road' },
  { name: 'Mr. Umesh Vishwakarma', role: 'Special Associate Member - Airoli' },
  { name: 'Mr. Prabhunath Vishwakarma', role: 'Special Associate Member - Shivshakti Nagar' },
  { name: 'Mr. Lalchand Vishwakarma', role: 'Special Associate Member - Kasheli' },
  { name: 'Mr. Shashibhushan Pathak', role: 'Special Associate Member - Kisnagar' },
  { name: 'Mr. Naeem Sheikh', role: 'Special Associate Member - Mulund' },
  { name: 'Mr. Mayadin Vishwakarma', role: 'Special Associate Member - Ramachandra Nagar' },
  { name: 'Mr. Anil Vishwakarma', role: 'Special Associate Member - Gothawali village' },
  { name: 'Mr. Shivkumar Vishwakarma', role: 'Special Associate Member - Lo. The city' },
  { name: 'Mr. Raju Nishad', role: 'Special Associate Member - Dharmveer Nagar' },
  { name: 'Mr. Chotelal Bind', role: 'Special Associate Member - Ghodbandar Road' },
  { name: 'Mr. Dr. Shriram Yadav', role: 'Special Associate Member - Lo. The city' },
  { name: 'Mr. Ram Asare Vishwakarma', role: 'Special Associate Member - Srinagar' },
  { name: 'Mr. Rafiq Ansari', role: 'Special Associate Member - Airoli' },
  { name: 'Mr. Rajnath Vishwakarma', role: 'Special Associate Member - Mulund' },
  { name: 'Mr. Srichand Vishwakarma', role: 'Special Associate Member - Kisnagar' },
  { name: 'Mr. Omprakash Yadav', role: 'Special Associate Member - Srinagar' },
  { name: 'Mr. Nandalal Vishwakarma', role: 'Special Associate Member - Kasheli' },
  { name: 'Mr. Manoj Vishwakarma', role: 'Special Associate Member - Srinagar' },
  { name: 'Mr. Ramesh Gupta', role: 'Special Associate Member - Srinagar' },
  { name: 'Mr. Manoj Sharma', role: 'Special Associate Member - Srinagar' },
  { name: 'Mr. Golu Vishwakarma', role: 'Special Associate Member - Srinagar' },
  { name: 'Mr. Sabhajit Vishwakarma', role: 'Special Associate Member - Louiswadi' },
  { name: 'Mr. Kamlesh Vishwakarma', role: 'Special Associate Member - Mira Road' },
]


function RouteComponent() {
  return (
    <div className="w-full min-h-screen font-Dm-Sans overflow-x-hidden">
      <div className="px-4 pt-32 pb-16 md:px-32 bg-parchment">
        <h1 className="font-Poppins font-semibold text-4xl md:text-6xl text-center tracking-tight md:leading-[1.2] md:mb-16">
          Honoring the Visionaries of Our <i>Samaj</i>
        </h1>

        {/* Top 8 figures as 4x2 grid */}
        <div className="mt-8 md:mt-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
            Visionaries
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {topFigures.map((fig, i) => (
              <FigureCard key={i} figure={fig} />
            ))}
          </div>
        </div>

        {/* Other members small cards */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-center md:text-left">
            Executive Committee & Members
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {otherMembers.map((member, i) => (
              <div
                key={i}
                className="p-3 bg-[hsl(39,56%,79%)] rounded-2xl shadow-sm text-center text-sm md:text-base"
              >
                <div className="font-semibold">{member.name}</div>
                <div className="text-gray-900">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function FigureCard({ figure }: { figure: typeof topFigures[0] }) {
  return (
    <div className="p-2 md:p-3 bg-[hsl(39,56%,79%)] rounded-2xl shadow-sm text-center">
      <img
       
  src={figure.img}
  alt={figure.name}
        className="w-full h-44 md:h-80  object-cover rounded-2xl mb-2"
      />


      <div className="font-semibold text-sm md:text-base">{figure.name}</div>
      <div className="text-gray-900 text-xs md:text-sm">{figure.role}</div>
    </div>
  )
}

export default RouteComponent
