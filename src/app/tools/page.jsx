import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
      <Section {...props}>
        <ul role="list" className="space-y-16">
          {children}
        </ul>
      </Section>
  )
}

function Tool({ title, href, children }) {
  return (
      <Card as="li">
        <Card.Title as="h3" href={href}>
          {title}
        </Card.Title>
        <Card.Description>{children}</Card.Description>
      </Card>
  )
}

export const metadata = {
  title: 'Tools',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Tools() {
  return (
      <SimpleLayout
          title="Software I use, gadgets I love, and other things I recommend."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Lenovo Legion 5i Pro (Gen 6) & Lenovo Legion 5 (Gen 6)">
              The Lenovo Legion 5i Pro has been a game-changer for me. It&apos;s powerful, silent, and they almost never crash even after years of use, making them the backbone of my development setup. I&apos;m so in love with my Legion that I actually got a second one!
            </Tool>
            <Tool title="2x Samsung CR50 FHD Curved Monitors">
              These monitors offer a superb HiDPI display experience. At 27&rdquo;+, they provide the real estate I need for multitasking and working at scale, ensuring every pixel is sharp and clear.
            </Tool>
            <Tool title="Logitech K380 Multi-device Bluetooth Keyboard - Black">
              The Logitech K380 is a reliable workhorse. Its multi-device capability allows seamless switching between different setups, which is useful.
            </Tool>
            <Tool title="Razer Basilisk V3 X HyperSpeed Wireless Gaming Mouse">
              This mouse isn&apos;t just for gaming; it&apos;s my magic wand for productivity. The customizable gestures make navigating through tasks feel great.
            </Tool>
            <Tool title="Unbranded Pro Gaming Chair - Black with White Trim">
              An absolute must for long sessions.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="IntelliJ v2023 & Webstorm v2024">
              IntelliJ and Webstorm are my go-to IDEs. Their robust feature sets and seamless integrations boost my productivity and speed up my work.
            </Tool>
            <Tool title="Vercel & MongoDB">
              Vercel and MongoDB are the dynamic duo for my personal projects. Vercel&apos;s deployment capabilities and MongoDB&apos;s flexible database management streamline my development process.
            </Tool>
            <Tool title="Git Bash">
              Git Bash is my terminal of choice. It integrates well with my workflow, providing a familiar and powerful command-line experience.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma has evolved from a design tool to our virtual whiteboard. Its collaboration features have revolutionized how my team brainstorms and iterates on ideas.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notes">
              Notes is a trusty old companion in my productivity toolkit. It&apos;s fast, simple, and incredibly efficient for jotting down ideas and keeping track of tasks.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
  )
}
