import Link from "next/link"

const navigation = {
  services: [
    { name: "VisionOps", href: "/services?service=0" },
    { name: "Data Engines", href: "/services?service=1" },
    { name: "Voice Systems", href: "/services?service=2" },
    { name: "Knowledge Wrappers", href: "/services?service=3" },
    { name: "Growth Intelligence", href: "/services?service=4" },
  ],
  company: [
    { name: "Our Process", href: "/how-we-work" },
    { name: "Contact", href: "/contact" },
    { name: "Book a Call", href: "/book-demo" },
  ],
}

export function Footer() {
  return (
    <footer className="section-border bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-foreground tracking-tighter">
              Core<span className="text-muted-foreground">Plex</span><span className="text-foreground/40">.</span>ai
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Elite Applied AI Engineering Studio. We engineer intelligence that subtracts manual toil from your core operations.
            </p>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              Services
            </h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} CorePlex.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
