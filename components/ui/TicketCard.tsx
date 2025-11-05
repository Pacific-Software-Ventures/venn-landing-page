interface TicketCardProps {
  borderColor: string;
  children: React.ReactNode;
}

export function TicketCard({ borderColor, children }: TicketCardProps) {
  return (
    <div className="relative">
      {/* SVG Background with ticket notches */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 300 400"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Ticket shape with notches on all 4 sides */}
          <path
            id="ticket-shape"
            d="
              M 20,0
              L 140,0
              A 10,10 0 0,0 150,10
              A 10,10 0 0,0 160,0
              L 280,0
              Q 300,0 300,20
              L 300,190
              A 10,10 0 0,0 290,200
              A 10,10 0 0,0 300,210
              L 300,380
              Q 300,400 280,400
              L 160,400
              A 10,10 0 0,0 150,390
              A 10,10 0 0,0 140,400
              L 20,400
              Q 0,400 0,380
              L 0,210
              A 10,10 0 0,0 10,200
              A 10,10 0 0,0 0,190
              L 0,20
              Q 0,0 20,0
              Z
            "
          />
        </defs>

        {/* White background */}
        <use href="#ticket-shape" fill="white" />

        {/* Colored border */}
        <use href="#ticket-shape" fill="none" stroke={borderColor} strokeWidth="4" />
      </svg>

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
}
