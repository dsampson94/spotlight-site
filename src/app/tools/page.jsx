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
          intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Legion 5 Pro Gen 7 (16GB, AMD)">
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it through
              with our various launch simulations.
            </Tool>
            <Tool title="2x Samsung CR50 FHD Curved Monitors">
              The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every pixel
              you can get counts.
            </Tool>
            <Tool title="Logitech K380 Multi-device Bluetooth Keyboard - Black ">
              They don’t make keyboards the way they used to. I buy these any time
              I see them go up for sale and keep them in storage in case I need
              parts or need to retire my main.
            </Tool>
            <Tool title="Razer Basilisk V3 X HyperSpeed Wireless Gaming Mouse">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
            <Tool title="Unbranded Pro Gaming Chair - Black with White Trim">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="IntelliJ v2023">
              I don’t care if it’s missing all of the fancy IDE features everyone
              else relies on, Sublime Text is still the best text editor ever
              made.
            </Tool>
            <Tool title="Github">
              I’m honestly not even sure what features I get with this that aren’t
              just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="AWS">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become our
              virtual whiteboard for the entire company. Never would have expected
              the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notes">
              It’s not the newest kid on the block but it’s still the fastest. The
              Sublime Text of the application launcher world.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
  )
}
