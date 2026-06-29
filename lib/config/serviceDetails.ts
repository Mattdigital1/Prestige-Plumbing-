export type ServiceDetails = {
  slug: string
  metaDescription: string
  heroImage?: string
  heroH1?: string
  includes: string[]
  faqs: { q: string; a: string }[]
}

export const SERVICE_DETAILS: Record<string, ServiceDetails> = {

  'new-construction-plumbing': {
    slug: 'new-construction-plumbing',
    heroImage: '/images/new-construction-slab.jpg',
    heroH1: 'New Construction Plumbing — Rough-In to Finish on the Mississippi Gulf Coast',
    metaDescription:
      'Prestige Plumbing LLC handles the full plumbing scope on new residential and commercial builds throughout the Mississippi Gulf Coast — rough-in through finish, permitted and coordinated with your GC.',
    includes: [
      'Underground rough-in — drainage, water supply, and cleanouts set before the slab is poured',
      'Above-slab rough-in — supply and drain lines run to every fixture location',
      'Top-out — vent stack tied in and extended through the roof',
      'Finish plumbing — fixture setting: toilets, sinks, tubs, showers, and faucets',
      'Water service connection from the municipal meter to the building',
      'Hose bibs, laundry connections, ice maker lines, and all ancillary rough-ins',
      'Natural gas piping for new residential and commercial builds',
      'Permit coordination and inspection scheduling with local building departments',
    ],
    faqs: [
      {
        q: 'When should a plumber be involved in a new construction project?',
        a: 'From the foundation stage. We set underground drainage before the slab is poured, so getting us in early prevents costly changes later. Bringing us in after framing always adds expense — it\'s easier and cheaper to do it right from the start.',
      },
      {
        q: 'Do you pull permits for new construction plumbing?',
        a: 'Yes. All of our new construction work is permitted and inspected. We coordinate with local building departments across the Mississippi Gulf Coast and handle the permit process as part of the job.',
      },
      {
        q: 'How do you coordinate with the general contractor?',
        a: 'We work directly with your GC and their schedule. We stage our work around the other trades, show up when we\'re supposed to, and communicate clearly if anything changes. A smooth build requires every sub to do their part — that\'s what we deliver.',
      },
      {
        q: 'Do you install natural gas piping for new builds?',
        a: 'Yes. We install gas supply lines for new residential and commercial construction throughout the Gulf Coast.',
      },
      {
        q: 'How long does the plumbing phase take on a new home?',
        a: 'It depends on the size of the build, but a typical residential project involves three phases — underground, rough-in, and finish — each scheduled around the broader build timeline. We\'ll give you a clear schedule when we review the plans.',
      },
    ],
  },

  'plumbing-remodels': {
    slug: 'plumbing-remodels',
    heroImage: '/images/new-construction-roughin.webp',
    heroH1: 'Kitchen & Bathroom Remodel Plumbing — Mississippi Gulf Coast',
    metaDescription:
      'Kitchen and bathroom remodel plumbing on the Mississippi Gulf Coast — relocating supply and drain lines, fixture installation, permit coordination, and working alongside your GC or designer.',
    includes: [
      'Kitchen remodel plumbing — sink relocation, dishwasher connections, pot filler rough-in, garbage disposal',
      'Bathroom remodel plumbing — shower drains, tub rough-in, toilet relocation, vanity supply and drain',
      'Relocating supply and drain lines to match new layouts',
      'New fixture installation — faucets, sinks, toilets, tubs, showers, and accessories',
      'Permit coordination for plumbing changes within a renovation',
      'Coordination with your general contractor, designer, or tile installer',
      'Whole-home repiping when walls are already open during a remodel',
    ],
    faqs: [
      {
        q: 'Do I need a permit for plumbing work during a remodel?',
        a: 'Often, yes — especially for drain and vent work, water heater replacements, or any change to the plumbing layout. We handle permits as part of the job and keep everything code-compliant, which matters when you sell the property.',
      },
      {
        q: 'Can you work alongside my existing contractor?',
        a: 'Yes. We regularly work as the plumbing subcontractor on projects managed by a general contractor or designer. Give us their contact info and we\'ll coordinate directly.',
      },
      {
        q: 'How long does the plumbing portion of a bathroom remodel take?',
        a: 'Rough-in work — moving supply and drain lines — typically takes one to two days depending on the complexity. Fixture setting at the end of the project is usually a half-day to one day.',
      },
      {
        q: 'We\'re moving the toilet to a different wall. Is that a major job?',
        a: 'Moving a toilet is more involved than keeping it in place — it requires relocating the drain and vent — but it\'s a routine job for our crew. We\'ll assess the space and give you a straight answer on what it involves.',
      },
      {
        q: 'Should we repipe the house while we have the walls open?',
        a: 'If your home has older galvanized or polybutylene pipe, opening walls for a remodel is often the most cost-effective time to replace it. We can include that scope as part of the project and you won\'t pay twice for the wall work.',
      },
    ],
  },

  'commercial-plumbing': {
    slug: 'commercial-plumbing',
    heroImage: '/images/commercial-pipe-rack.jpg',
    heroH1: 'Commercial Plumbing for Gulf Coast Businesses, Restaurants & Contractors',
    metaDescription:
      'Commercial plumbing for businesses, restaurants, and property managers on the Mississippi Gulf Coast. New construction, tenant improvements, restaurant plumbing, and commercial service and repair.',
    includes: [
      'New commercial construction plumbing — rough-in through finish',
      'Tenant improvement (TI) plumbing for office, retail, and restaurant buildouts',
      'Restaurant and commercial kitchen plumbing — grease interceptors, three-compartment sinks, floor drains, commercial dishwashers',
      'Multi-family and apartment complex plumbing — new construction and service',
      'Commercial water heater systems — tank and tankless',
      'Code-compliant commercial permit coordination',
      'Ongoing service and repair for businesses and property managers',
    ],
    faqs: [
      {
        q: 'Do you handle restaurant and commercial kitchen plumbing?',
        a: 'Yes. Restaurant plumbing has specific requirements — grease interceptors, three-compartment sinks, commercial dishwasher connections, floor drains — and we handle all of it. We know what health inspectors look for and build to those standards.',
      },
      {
        q: 'Can you work nights or weekends to minimize downtime?',
        a: 'We work with your schedule. For businesses that can\'t shut down during regular hours, we\'ll discuss what we can do to minimize disruption.',
      },
      {
        q: 'Do you handle commercial permits?',
        a: 'Yes. All of our commercial work is fully permitted and inspected where required. We coordinate with the relevant jurisdictions and handle the paperwork.',
      },
      {
        q: 'What types of commercial properties do you work on?',
        a: 'Offices, restaurants, retail, multi-family properties, hotels, medical offices, warehouses, and other commercial buildings throughout the Mississippi Gulf Coast.',
      },
      {
        q: 'Do you provide emergency service for commercial properties?',
        a: 'Yes, 24 hours a day, 7 days a week. A burst pipe or failed water heater at a business can\'t wait until morning — call us directly at (228) 327-6151 and we\'ll dispatch immediately.',
      },
    ],
  },

  'water-heater-services': {
    slug: 'water-heater-services',
    heroImage: '/images/water-heater-tank.jpg',
    heroH1: 'Water Heater Repair & Replacement — Tank & Tankless on the Gulf Coast',
    metaDescription:
      'Water heater repair and replacement on the Mississippi Gulf Coast. Tank and tankless units, same-day service on most jobs, and honest recommendations — repair when it makes sense, replace when it doesn\'t.',
    includes: [
      'Traditional tank water heater replacement — all major brands, residential and commercial sizes',
      'Tankless water heater installation and replacement',
      'Water heater repair — heating elements, thermostats, pilot lights, pressure relief valves',
      'Anode rod inspection and replacement to extend tank life',
      'Expansion tank installation for closed plumbing systems',
      'Gas and electric water heater service',
      'Proper removal and disposal of old units',
    ],
    faqs: [
      {
        q: 'Should I repair my water heater or replace it?',
        a: 'If the unit is under 8 years old and the repair is straightforward, repair usually makes sense. If it\'s older, has a leaking tank, or has multiple issues, replacement is typically the better investment. We\'ll give you an honest recommendation — we don\'t push replacements when a repair will do the job.',
      },
      {
        q: 'How long does a water heater replacement take?',
        a: 'Most standard tank replacements take 2 to 4 hours. Tankless installations take longer, particularly if it\'s a first-time install that requires new gas line work or electrical upgrades.',
      },
      {
        q: 'Tank or tankless — which is right for my home?',
        a: 'Both have real advantages. Tankless units provide endless hot water on demand and cost less to operate long-term, but require a larger upfront investment and sometimes need gas line or electrical upgrades. Standard tank heaters are simpler and less expensive to install. We\'ll walk you through both options for your situation.',
      },
      {
        q: 'My water heater is leaking — is it an emergency?',
        a: 'It depends on where the leak is. A leak from the tank body or from the pressure relief valve usually means the unit needs to be replaced and water damage is a real risk — call us right away. A small drip from a fitting may be less urgent. Call us and we\'ll help you assess it over the phone.',
      },
      {
        q: 'Do you carry water heaters in stock?',
        a: 'We keep common tank sizes on hand so we can complete most replacements in a single visit. For specific tankless models or less common sizes, we\'ll confirm availability before scheduling.',
      },
    ],
  },

  'residential-plumbing': {
    slug: 'residential-plumbing',
    heroImage: '/images/under-sink-kitchen.webp',
    heroH1: 'Residential Plumbing Services for Mississippi Gulf Coast Homeowners',
    metaDescription:
      'Full-service residential plumbing for Gulf Coast homeowners — leak repair, drain cleaning, fixture installation, water line repair, and whole-home repiping. Licensed, insured, and locally owned.',
    includes: [
      'Leak detection and repair — supply lines, drain connections, and fixture leaks',
      'Toilet repair and replacement — runs, clogs, seals, flanges, and full replacement',
      'Faucet and fixture installation and repair',
      'Drain cleaning and clearing — kitchen drains, bathroom drains, main line',
      'Water supply line repair and replacement',
      'Garbage disposal installation and repair',
      'Shower and tub repair — drains, cartridges, diverters, shower heads',
      'Whole-home repiping — PEX replacement of old galvanized or polybutylene pipe',
    ],
    faqs: [
      {
        q: 'How quickly can you come out for a non-emergency plumbing issue?',
        a: 'We do our best to get to non-emergency calls as quickly as our schedule allows. Call or submit a service request and we\'ll give you a realistic timeframe — we don\'t give you a four-hour window and then show up at the end of it.',
      },
      {
        q: 'Do you work on older homes?',
        a: 'Yes. Many Gulf Coast homes have older galvanized pipe, cast iron drain lines, or outdated fixtures. We know these systems and can repair, upgrade, or repipe as needed. We won\'t tell you everything needs to be replaced when a targeted repair is the right call.',
      },
      {
        q: 'My drain is slow — should I call a plumber or try fixing it myself?',
        a: 'A single slow drain is often a simple clog that you can clear with a drain snake. Multiple slow drains at once, or a drain that keeps coming back, can signal a main line issue. If the hardware store fix doesn\'t hold, call us before it becomes an emergency.',
      },
      {
        q: 'Will you install a fixture I already purchased?',
        a: 'Yes. We\'ll install fixtures you\'ve already bought. Just make sure it\'s the right size and type for your application — if you\'re unsure, ask us before you buy and we\'ll point you in the right direction.',
      },
      {
        q: 'What does a whole-home repipe involve?',
        a: 'We replace the supply lines throughout your home, typically with PEX pipe. This requires opening walls at fixture locations and patching afterward. Most whole-home repipes take one to three days depending on the size of the house. We walk you through the full process before we start.',
      },
    ],
  },

  'plumbing-repairs': {
    slug: 'plumbing-repairs',
    heroImage: '/images/plumbing-tools-floor.jpg',
    heroH1: 'Fast Plumbing Repairs — Leaks, Fixtures & Pipes on the Gulf Coast',
    metaDescription:
      'Fast, honest plumbing repairs across the Mississippi Gulf Coast — leaks, broken fixtures, pipe damage, running toilets, drain problems, and more. Licensed plumbers available 24/7.',
    includes: [
      'Leak repair — supply lines, drain connections, valve bodies, and fixture supply tubes',
      'Running toilet repair — fill valves, flappers, flush valves, and float assemblies',
      'Faucet repair — dripping, low pressure, hot/cold mixing issues, cartridge replacement',
      'Pipe repair — copper, PVC, and PEX — pinhole leaks, split pipes, and joint failures',
      'Shut-off valve repair and replacement — under-sink, toilet, and main supply valves',
      'Garbage disposal repair — jams, motor failures, and leaking units',
      'Shower and tub repair — cartridge replacement, diverter repair, shower head replacement',
      'Emergency repairs — 24/7 response for leaks that can\'t wait',
    ],
    faqs: [
      {
        q: 'How do I know if I have a hidden leak?',
        a: 'Watch your water bill — an unexpected spike is one of the clearest signs. Other indicators include water stains on walls or ceilings, the sound of running water when no fixtures are in use, damp spots on floors, and mold or musty odors in areas that shouldn\'t be wet. If you suspect a leak, call us rather than waiting.',
      },
      {
        q: 'My toilet runs constantly — is that a big deal?',
        a: 'A constantly running toilet can waste hundreds of gallons of water per day, which adds up fast on your water bill. In most cases it\'s a worn flapper, a failing fill valve, or a float set too high — all inexpensive repairs. Don\'t let it run.',
      },
      {
        q: 'Can you repair a dripping faucet, or do I need a new one?',
        a: 'Most dripping faucets can be repaired by replacing internal components — cartridges, seats and springs, or ceramic disc elements depending on the faucet type. Replacement is usually only necessary if the body of the fixture is cracked or the brand no longer makes replacement parts.',
      },
      {
        q: 'I have low water pressure in one faucet — what causes that?',
        a: 'Single-fixture low pressure is often caused by a clogged aerator or a failing cartridge in that fixture. House-wide low pressure can point to a main supply issue, failing pressure regulator, or significant leak in the system. We\'ll find the cause and fix it.',
      },
      {
        q: 'Do you charge for service calls?',
        a: 'Call us to discuss your situation — we\'ll be straightforward about how we price service calls in your area. For emergency calls or complex repairs, pricing is discussed before work begins.',
      },
    ],
  },

  'plumbing-installation': {
    slug: 'plumbing-installation',
    heroImage: '/images/faucet-installation.jpg',
    heroH1: 'Professional Plumbing Installation — Fixtures & Appliances on the Gulf Coast',
    metaDescription:
      'Professional plumbing installation across the Mississippi Gulf Coast — sinks, toilets, faucets, showers, dishwashers, garbage disposals, and all plumbing appliances. Done cleanly, done to code.',
    includes: [
      'Toilet installation — standard, comfort height, wall-hung, and bidet units',
      'Sink installation — kitchen, bathroom, utility, and bar sinks',
      'Faucet installation — kitchen, bathroom, pot fillers, and outdoor hose bibs',
      'Shower and tub installation — pan, valve, and trim installation',
      'Dishwasher supply and drain connections',
      'Garbage disposal installation and replacement',
      'Refrigerator ice maker line installation',
      'Whole-house water filtration and softener installation',
    ],
    faqs: [
      {
        q: 'Can you install a fixture I already purchased?',
        a: 'Yes, we install customer-supplied fixtures. We ask that you verify the fixture matches your existing rough-in dimensions before we arrive — we\'ll help you confirm what to look for over the phone.',
      },
      {
        q: 'Do I need a permit to install a new toilet or faucet?',
        a: 'Straight fixture replacements in the same location typically don\'t require permits. Work that changes the plumbing layout — new drain locations, added supply lines — usually does. We\'ll tell you upfront what your project requires.',
      },
      {
        q: 'How long does a toilet installation take?',
        a: 'A standard toilet swap takes about an hour. If the flange is damaged, the floor needs repair, or you\'re upgrading to a different rough-in size, it takes longer. We\'ll let you know what we find once we see it.',
      },
      {
        q: 'I want to add a pot filler over my stove — is that a big job?',
        a: 'It depends on how close the existing supply lines are to the installation point. Some pot fillers can be tapped into nearby lines with minimal wall work. Others require running a new line through the wall behind the stove. We\'ll assess the layout and give you a clear picture.',
      },
      {
        q: 'Can you install a water softener or whole-house filter?',
        a: 'Yes. We install water softeners, whole-house carbon filters, reverse osmosis systems, and other water treatment equipment. We make sure the installation integrates cleanly with your existing system and leaves your water lines easy to access for future service.',
      },
    ],
  },

  'plumbing-maintenance': {
    slug: 'plumbing-maintenance',
    heroImage: '/images/commercial-boiler.jpg',
    heroH1: 'Plumbing Maintenance for Gulf Coast Homes & Commercial Properties',
    metaDescription:
      'Proactive plumbing maintenance for Mississippi Gulf Coast homes and businesses — inspections, water heater upkeep, drain maintenance, and system checks that catch problems before they become emergencies.',
    includes: [
      'Water heater inspection — anode rod check, sediment flush, thermostat test, pressure relief valve check',
      'Drain cleaning and slow drain treatment — kitchen, bathroom, and main line',
      'Fixture inspection — checking for drips, running toilets, and low pressure',
      'Supply line and shut-off valve inspection — identify aging hoses before they fail',
      'Exposed pipe inspection for corrosion, leaks, and joint integrity',
      'Water pressure check and pressure regulator assessment',
      'Sump pump inspection and test cycle for properties with basement areas',
      'Written service summary provided after every maintenance visit',
    ],
    faqs: [
      {
        q: 'How often should I have my plumbing maintained?',
        a: 'Most homeowners benefit from an annual plumbing check. Properties with older systems, high water usage, or a history of issues may need biannual visits. Commercial properties and rental units often warrant more frequent attention since problems can develop quickly with higher usage.',
      },
      {
        q: 'What does a water heater maintenance visit include?',
        a: 'We inspect the anode rod (which protects the tank from corrosion), flush out sediment buildup, test the thermostat and pressure relief valve, and check all connections for leaks. A water heater that\'s maintained annually typically lasts significantly longer than one that isn\'t touched until it fails.',
      },
      {
        q: 'Can maintenance prevent a plumbing emergency?',
        a: 'Not every emergency, but many. Braided steel supply lines fail without warning — but we can see when they\'re aging. Water heaters leak after years of corrosion — but we can spot a failing anode rod early. Slow drains become sewage backups — but we can clear them while they\'re still manageable.',
      },
      {
        q: 'Do you offer maintenance agreements for commercial properties?',
        a: 'Contact us to discuss your commercial property. For property managers and businesses with ongoing maintenance needs, we can discuss a schedule that keeps your systems in shape without you having to remember to call us each time.',
      },
      {
        q: 'What should I do between maintenance visits?',
        a: 'Know where your main water shutoff is and confirm it works. Watch for changes in water pressure, unusual sounds, or wet spots that weren\'t there before. Check under sinks a couple times a year. And don\'t ignore a slow drain — clear it or call us before it backs up.',
      },
    ],
  },

  'plumbing-inspections': {
    slug: 'plumbing-inspections',
    heroImage: '/images/under-sink-kitchen.webp',
    heroH1: 'Plumbing Inspections for Gulf Coast Home Buyers, Sellers & Owners',
    metaDescription:
      'Plumbing inspections for home buyers, sellers, and property owners across the Mississippi Gulf Coast. Written reports, honest assessments, and no pressure — just an accurate picture of what you\'re working with.',
    includes: [
      'Visible supply and drain line inspection — checking for leaks, corrosion, and aging materials',
      'Water heater inspection — age, condition, code compliance, and remaining useful life',
      'Fixture function check — toilets, faucets, showers, tubs, and hose bibs',
      'Water pressure measurement — check against code range (40–80 PSI)',
      'Drain flow test — all accessible drains tested for proper drainage',
      'Main shutoff valve operation check',
      'Visible pipe material identification — copper, PEX, galvanized, or polybutylene',
      'Written summary of findings, deficiencies, and recommended repairs',
    ],
    faqs: [
      {
        q: 'Should I get a plumbing inspection when buying a home?',
        a: 'Yes — especially on the Gulf Coast, where older homes often have galvanized pipe, aging water heaters, or cast iron drain lines that a general home inspector might note but not fully evaluate. A plumbing-specific inspection gives you a clear picture of what you\'re inheriting and what it will cost to address.',
      },
      {
        q: 'What\'s the difference between a plumbing inspection and a home inspection?',
        a: 'A home inspector covers plumbing as one of many systems and typically won\'t run water long enough to find slow drains, test flush cycles on every toilet, or evaluate pipe material throughout the house. A plumbing inspection is focused — we evaluate the plumbing system specifically and in more depth.',
      },
      {
        q: 'What happens if the inspection finds problems?',
        a: 'We provide a written summary of everything we found. You decide what to do with it — use it in negotiations, request repairs before closing, budget for post-purchase repairs, or walk away. We give you the information; the decisions are yours.',
      },
      {
        q: 'Do you inspect sewer lines?',
        a: 'A standard inspection covers accessible drain lines. A sewer camera inspection of the main line from house to street is a separate service that we can perform on request. For older homes, we\'d typically recommend it — cast iron drain lines on Gulf Coast homes built before the 1980s are often near end of life.',
      },
      {
        q: 'How long does a plumbing inspection take?',
        a: 'For a typical single-family home, expect 1.5 to 2.5 hours. Larger homes, homes with two water heaters, or properties with complex systems will take longer. We\'ll give you a time estimate when you call.',
      },
    ],
  },

  'bathroom-plumbing': {
    slug: 'bathroom-plumbing',
    heroImage: '/images/bathroom-under-sink.webp',
    heroH1: 'Bathroom Plumbing — Repair, Installation & Remodeling on the Gulf Coast',
    metaDescription:
      'Complete bathroom plumbing services for Gulf Coast homeowners — toilet repair, shower and tub work, vanity installation, drain clearing, and full bathroom remodel plumbing.',
    includes: [
      'Toilet repair — running toilets, weak flushes, rocking seats, wax ring replacement',
      'Toilet replacement — standard, comfort height, and dual-flush units',
      'Shower valve repair and replacement — cartridge, pressure-balancing, and thermostatic valves',
      'Shower drain repair and replacement — including tiled shower drain installation',
      'Bathtub drain and overflow assembly repair',
      'Vanity and sink installation — drop-in, undermount, vessel, and pedestal sinks',
      'Faucet replacement and supply line replacement',
      'Bathroom addition rough-in — new supply, drain, and vent for added bathrooms',
    ],
    faqs: [
      {
        q: 'My shower pressure is fine but the water won\'t get hot. What\'s wrong?',
        a: 'This is usually a failing cartridge in the shower valve — the internal component that balances hot and cold. Replacing the cartridge typically solves it without having to replace the entire valve or open the wall. We\'ll diagnose it and tell you exactly what\'s needed.',
      },
      {
        q: 'My toilet rocks when I sit on it. Is that a plumbing problem?',
        a: 'It can be. A rocking toilet is sometimes just loose bolts, which is a five-minute fix. But rocking can also indicate a damaged flange (the ring that anchors the toilet to the drain) or a soft subfloor from an old leak. We\'ll determine which it is before assuming the simple answer.',
      },
      {
        q: 'Can you add a bathroom to my home?',
        a: 'Yes. Adding a bathroom requires running new supply and drain lines from your existing system to the new location. The complexity — and cost — depends on how far the new bathroom is from existing stack and supply lines. We\'ll assess the layout and give you a clear scope.',
      },
      {
        q: 'My tub drains slowly but everything else is fine. What\'s the cause?',
        a: 'Usually a hair clog near the drain or in the P-trap — often cleared with a drain snake without needing to open any pipes. If clearing the drain doesn\'t solve it, we\'ll look deeper for a partial blockage further down the line.',
      },
      {
        q: 'Do I need a plumber for a vanity swap?',
        a: 'If you\'re swapping a vanity for one with the same footprint and the same drain and supply locations, it\'s straightforward work. If the new vanity has a different sink configuration, requires moving the drain, or is a different size, a plumber should handle it. We\'ll give you a quick answer when you describe what you\'re working with.',
      },
    ],
  },

  'kitchen-plumbing': {
    slug: 'kitchen-plumbing',
    heroImage: '/images/under-sink-kitchen.webp',
    heroH1: 'Kitchen Plumbing — Sinks, Faucets, Disposals & Dishwashers on the Gulf Coast',
    metaDescription:
      'Kitchen plumbing services across the Mississippi Gulf Coast — sink installation, faucet replacement, garbage disposal, dishwasher connections, and kitchen remodel rough-in.',
    includes: [
      'Kitchen sink installation — single, double, and farmhouse sinks',
      'Kitchen faucet installation and replacement — standard, pull-down, and commercial-style',
      'Garbage disposal installation and replacement',
      'Dishwasher supply and drain connection',
      'Under-sink water filter installation',
      'Ice maker line installation — refrigerator and built-in ice makers',
      'Pot filler rough-in and installation',
      'Kitchen remodel plumbing — drain and supply relocation for new layouts',
    ],
    faqs: [
      {
        q: 'My garbage disposal is humming but not spinning — what\'s happening?',
        a: 'That usually means the disposal is jammed. The motor is running but the grinding plate is stuck on something. Before calling us, try inserting the hex key (usually a 1/4-inch Allen wrench) into the socket on the bottom of the unit and turning it manually to free the jam — there\'s often a reset button on the bottom too. If that doesn\'t work, or if the unit is older, it may need to be replaced.',
      },
      {
        q: 'The drain under my kitchen sink leaks. Do I need a plumber?',
        a: 'Possibly. An under-sink drain leak could be a loose slip joint — a quick fix. But if it\'s at a glued PVC connection, cracked pipe, or a basket strainer that\'s failing, you\'ll want a plumber. The under-sink area in kitchens tends to have compressed, awkward plumbing that\'s harder to work on than it looks.',
      },
      {
        q: 'Can I put a farmhouse sink in where a standard drop-in sink was?',
        a: 'Usually, but it requires cabinet modification and sometimes countertop work. The drain location typically stays in the same place, but the sink opening needs to be enlarged and the base cabinet needs to be cut down to accommodate the apron front. We handle the plumbing side — coordinate with your cabinet maker for the woodwork.',
      },
      {
        q: 'My dishwasher isn\'t draining. Is that a plumbing problem or an appliance problem?',
        a: 'Could be either. Check whether the drain hose (under the sink) is kinked or clogged. If the drain line is clear and the dishwasher still won\'t drain, the issue is likely internal to the appliance — pump, check valve, or control board. If the kitchen drain itself is slow, that can also cause the dishwasher to back up.',
      },
      {
        q: 'How hard is it to add a pot filler above the stove?',
        a: 'It depends on what\'s in the wall behind the stove. If there\'s an existing supply line within reach, it\'s a straightforward job. If we need to run a new line through finished walls, there\'s more labor involved. We\'ll look at the layout and give you a clear picture before starting.',
      },
    ],
  },

  'water-heater-repair': {
    slug: 'water-heater-repair',
    heroImage: '/images/water-heater-repair.webp',
    heroH1: 'Water Heater Repair — No Hot Water? We Fix It Fast on the Gulf Coast',
    metaDescription:
      'Water heater repair across the Mississippi Gulf Coast — no hot water, pilot light issues, element failures, leaking tanks, pressure relief problems, and all standard repair work.',
    includes: [
      'Heating element replacement — upper and lower elements on electric water heaters',
      'Thermostat replacement — electric and gas water heater thermostats',
      'Pilot light troubleshooting and thermocouple replacement on gas units',
      'Gas valve replacement when the pilot won\'t stay lit',
      'Pressure relief valve testing and replacement',
      'Anode rod replacement to stop tank corrosion',
      'Dip tube replacement when hot water supply runs short',
      'Leak diagnosis — distinguishing repairable fitting leaks from failed tank bodies',
    ],
    faqs: [
      {
        q: 'I have no hot water. Is it the heating element or something else?',
        a: 'On an electric water heater, no hot water usually points to a failed heating element or tripped breaker. Partial hot water (runs cold after a few minutes) often means the upper element failed. On a gas heater, check whether the pilot is lit. If the pilot is on but you still have no hot water, the thermostat or gas valve may be the issue. Call us and we\'ll walk through it with you.',
      },
      {
        q: 'My water heater is making a rumbling sound. What does that mean?',
        a: 'That rumbling is typically sediment — minerals that have settled at the bottom of the tank heating and popping. A thorough flush can help, but on older tanks it may indicate the unit is near the end of its life. We\'ll flush it and tell you honestly whether it buys you meaningful time or whether replacement makes more sense.',
      },
      {
        q: 'Water is dripping from the pressure relief valve. Is that dangerous?',
        a: 'A dripping pressure relief valve usually means one of three things: the valve is failing and needs to be replaced (most common), water pressure in your system is too high, or the water temperature is set too high causing the tank to expand excessively. Don\'t ignore it — call us. It\'s a simple repair but the valve exists for safety reasons.',
      },
      {
        q: 'My gas water heater pilot light keeps going out. Can that be fixed?',
        a: 'Yes. A pilot that won\'t stay lit is usually a worn thermocouple — the safety sensor that signals the gas valve to stay open. Thermocouples are inexpensive parts and we can replace one quickly. If the thermocouple checks out fine, we\'ll look at the gas valve next.',
      },
      {
        q: 'At what age should I stop repairing and start replacing?',
        a: 'Once a tank water heater passes 10–12 years, the math on repairs changes. A major repair at that age may buy you one more year before the next problem. We\'ll be straight with you: if the repair cost is significant and the unit is old, we\'ll say so and give you both options.',
      },
    ],
  },

  'water-heater-installation': {
    slug: 'water-heater-installation',
    heroImage: '/images/water-heater-tank.jpg',
    heroH1: 'Water Heater Installation — Tank & Tankless, Same-Day on the Gulf Coast',
    metaDescription:
      'Water heater installation across the Mississippi Gulf Coast — tank and tankless, gas and electric, same-day on most standard replacements. Permits, disposal, and full installation included.',
    includes: [
      'Tank water heater installation — gas and electric, all standard sizes (30, 40, 50, 75 gallon)',
      'Tankless water heater installation — whole-house and point-of-use units',
      'Removal and disposal of the old water heater',
      'Expansion tank installation for closed plumbing systems (required in many areas)',
      'Gas line connection and pressure check for gas water heater installations',
      'Electrical connection and disconnect work for electric units (coordinated with licensed electrician where required)',
      'Permit acquisition and scheduling inspection where required',
      'Full system test before leaving the job site',
    ],
    faqs: [
      {
        q: 'How quickly can you replace my water heater?',
        a: 'For a standard tank-for-tank replacement with the same fuel type, many jobs are same-day. We stock common sizes so we don\'t have to order parts for most residential replacements. Call us and we\'ll confirm availability.',
      },
      {
        q: 'What size water heater do I need?',
        a: 'General guidelines: 30–40 gallon for 1–2 people, 40–50 gallon for 3–4 people, 50–75 gallon for 5+ people or large homes with multiple showers. Usage patterns matter too — a family that showers back-to-back needs more capacity than one that staggers showers. We\'ll make a recommendation based on your household.',
      },
      {
        q: 'Should I switch from tank to tankless?',
        a: 'Tankless water heaters deliver endless hot water on demand and cost less to operate annually, but cost more upfront and may require gas line upgrades or electrical work. They\'re an excellent long-term investment, especially for households with high hot water demand. We\'ll give you a straight comparison for your situation.',
      },
      {
        q: 'Do I need an expansion tank?',
        a: 'If you\'re on a closed water system — which includes most properties with a pressure regulator or backflow preventer — yes. An expansion tank protects your water heater and plumbing from thermal expansion pressure. Many Gulf Coast municipalities now require them. We include the assessment as part of the installation.',
      },
      {
        q: 'What happens to my old water heater?',
        a: 'We remove and properly dispose of it. You don\'t need to arrange anything — the old unit leaves with us.',
      },
    ],
  },

  'fixture-installation': {
    slug: 'fixture-installation',
    heroImage: '/images/faucet-installation.jpg',
    heroH1: 'Toilet, Sink & Faucet Installation — Licensed Plumbers on the Gulf Coast',
    metaDescription:
      'Fixture installation and replacement across the Mississippi Gulf Coast — toilets, sinks, faucets, showers, tubs, garbage disposals, and all plumbing fixtures. Customer-supplied or contractor-sourced.',
    includes: [
      'Toilet installation and replacement — standard, dual-flush, comfort height, and wall-hung',
      'Sink installation — kitchen, bathroom, bar, utility, and vessel sinks',
      'Faucet installation — kitchen, bathroom, pot filler, laundry, and outdoor faucets',
      'Shower valve and trim installation — pressure-balancing and thermostatic valves',
      'Bathtub installation and drain assembly',
      'Garbage disposal installation and replacement',
      'Bidet and bidet seat installation',
      'Emergency shutoff valve installation under every sink and behind every toilet',
    ],
    faqs: [
      {
        q: 'Can you install a fixture I already bought?',
        a: 'Yes. We regularly install customer-supplied fixtures. Make sure the fixture is appropriate for your rough-in dimensions before we arrive — we\'ll tell you what to look for when you call.',
      },
      {
        q: 'I bought a faucet at the hardware store. How long will installation take?',
        a: 'A straightforward kitchen or bathroom faucet swap — no pipe movement, same-size holes — typically takes 30 to 60 minutes once we\'re on site. Older supply tubes that need replacing, corroded nuts, or cramped under-sink spaces can add time.',
      },
      {
        q: 'Can you replace just the shower trim and valve, or do I have to replace everything?',
        a: 'In many cases you can replace just the trim and cartridge without touching the valve body in the wall. This depends on the brand and whether replacement parts are still available. If the valve body itself is corroded or the brand has been discontinued, a full valve replacement is the right call — which does require opening the wall.',
      },
      {
        q: 'Do I need to turn off my water to have a fixture installed?',
        a: 'Yes — we shut off the water to the fixture or to the house depending on what we\'re working on. On most fixture replacements, supply is off for less than an hour. We give you a heads-up before any extended shutoff.',
      },
      {
        q: 'I have an older home with non-standard rough-in dimensions. Can you still install modern fixtures?',
        a: 'Usually yes, with the right fixture selection. Toilets come in 10-inch, 12-inch, and 14-inch rough-in sizes to accommodate most existing drain locations. For faucets and sinks, we\'ll measure your existing configuration before you buy anything to make sure you get the right fit.',
      },
    ],
  },

  'pipe-repair': {
    slug: 'pipe-repair',
    heroImage: '/images/burst-pipe.webp',
    heroH1: 'Pipe Repair & Replacement — Burst Pipes & Leaks Fixed Fast on the Gulf Coast',
    metaDescription:
      'Pipe repair across the Mississippi Gulf Coast — burst pipes, pinhole leaks, corroded supply lines, drain line damage, and pipe replacement. Fast response, licensed plumbers.',
    includes: [
      'Burst pipe repair — immediate response to split or ruptured water lines',
      'Pinhole leak repair in copper pipe',
      'PVC and CPVC pipe repair — cracked joints, split fittings, and failed glue connections',
      'PEX supply line repair and replacement',
      'Galvanized pipe repair and section replacement',
      'Cast iron drain line repair and replacement',
      'Main supply line repair from meter to structure',
      'Whole-home repiping when repairs are no longer cost-effective',
    ],
    faqs: [
      {
        q: 'I have a burst pipe. What do I do right now?',
        a: 'Turn off the main water supply to your home immediately — the shutoff is usually at the meter near the street or at the wall where the main line enters the house. Then call us. We\'re available 24/7. Leave the affected faucets open to relieve pressure and limit additional damage while we\'re on our way.',
      },
      {
        q: 'What causes pipes to burst?',
        a: 'On the Gulf Coast, freeze events are the most common cause — pipes in exterior walls or uninsulated crawl spaces are vulnerable when temperatures drop. Corrosion over time in older galvanized pipe, excessive water pressure, physical impact, and manufacturing defects are other causes. We\'ll identify the root cause so the same thing doesn\'t happen again.',
      },
      {
        q: 'I have a small drip from a pipe joint. Can I leave it?',
        a: 'No. A small drip will get worse, and the water that\'s already there is damaging your structure. Even a slow leak behind a wall can cause mold and rot over months. Get it fixed while it\'s small — it\'s a much cheaper repair than water damage remediation.',
      },
      {
        q: 'My home has old galvanized pipe. Should I replace it?',
        a: 'Galvanized pipe corrodes from the inside out, gradually restricting water flow and eventually failing. If your home was built before 1970 and still has original plumbing, there\'s a good chance the pipes are nearing the end of their useful life. Opening walls for any reason is a good opportunity to replace sections, and a full repipe is often worth doing proactively.',
      },
      {
        q: 'Do you repair slab leaks?',
        a: 'Yes. A slab leak is a leak in a supply or drain line embedded in or below your concrete foundation. We can locate the leak, assess options — spot repair, rerouting the line through the walls above, or full repipe — and recommend the best approach for your situation.',
      },
    ],
  },

  'leak-detection': {
    slug: 'leak-detection',
    heroImage: '/images/burst-pipe.webp',
    heroH1: 'Leak Detection & Repair — Hidden Water Leaks Found & Fixed on the Gulf Coast',
    metaDescription:
      'Professional leak detection for hidden water leaks in walls, slabs, and underground lines across the Mississippi Gulf Coast. We locate the leak, then we fix it.',
    includes: [
      'Pressure testing to confirm and locate active leaks in supply lines',
      'Slab leak detection — locating leaks in water lines embedded in or below the foundation',
      'Wall and ceiling leak tracing — identifying the source of moisture in finished spaces',
      'Underground line leak detection for supply lines between meter and structure',
      'Isolation testing to identify which section of a system is leaking',
      'Full repair once the leak is located — we don\'t just find it and leave',
      'Water damage documentation for insurance claims',
      'Recommendations to prevent future leaks in older systems',
    ],
    faqs: [
      {
        q: 'How can I tell if I have a hidden water leak?',
        a: 'A water bill that\'s higher than normal without a change in usage is the clearest signal. Other signs: the sound of running water when no fixtures are on, warm spots on a concrete floor (often a hot water slab leak), damp drywall or staining that appears without a visible source, mold in unexpected places, and a water meter that continues to tick when all water is turned off inside the house.',
      },
      {
        q: 'What is a slab leak and how serious is it?',
        a: 'A slab leak is a break in a water line that runs through or beneath your concrete foundation. It can cause significant structural damage over time as water softens the soil under the slab and erodes the concrete. Hot water slab leaks also spike your water heating costs. It\'s a serious issue — don\'t wait if you suspect one.',
      },
      {
        q: 'How do you find a leak without tearing up everything?',
        a: 'We start with pressure testing to confirm and isolate the leak to a section of the system. For supply leaks, listening equipment and pressure isolation can narrow the location significantly before any opening is made. We minimize damage — we\'re not pulling out drywall or jackhammering unless we know exactly where to look.',
      },
      {
        q: 'Will you repair the leak once you find it?',
        a: 'Yes. Leak detection and repair is one service. We locate it and fix it in the same visit whenever possible.',
      },
      {
        q: 'My water meter still moves when everything in the house is off. What does that mean?',
        a: 'That\'s a clear sign of a leak somewhere in your system — either inside the house or between the meter and the house. It\'s worth addressing promptly both to prevent water damage and to stop paying for water that\'s going into the ground or into your walls.',
      },
    ],
  },

  'drain-sewer-plumbing': {
    slug: 'drain-sewer-plumbing',
    heroImage: '/images/drain-cleaning.jpg',
    heroH1: 'Drain Cleaning & Sewer Service — Mississippi Gulf Coast',
    metaDescription:
      'Drain cleaning and sewer service across the Mississippi Gulf Coast — slow drains, main line clogs, sewer camera inspections, and drain line repair for residential and commercial properties.',
    includes: [
      'Drain snaking — kitchen, bathroom, and floor drains',
      'Main sewer line cleaning and clearing',
      'Hydro-jetting for stubborn grease and buildup',
      'Sewer camera inspection — video of main line from house to street',
      'Sewer line repair and replacement — clay, cast iron, and PVC',
      'Root intrusion clearing and root barrier treatment',
      'Grease trap cleaning and maintenance for commercial kitchens',
      'Drain line rerouting and replacement for failed or collapsed lines',
    ],
    faqs: [
      {
        q: 'Multiple drains in my house are slow at the same time. What does that mean?',
        a: 'When multiple fixtures drain slowly — or you hear gurgling from one drain when another is running — the problem is almost always in the main line, not at the individual fixtures. A main line clog or partial blockage affects every fixture downstream. Call us rather than trying to snake individual drains.',
      },
      {
        q: 'How often should main sewer lines be cleaned?',
        a: 'Homes with mature trees nearby typically benefit from annual or biannual cleaning to clear root growth before it becomes a full blockage. Homes without that risk can go longer between cleanings. If you\'ve had a backup in the past, we\'d recommend a camera inspection to see what you\'re actually dealing with.',
      },
      {
        q: 'What is hydro-jetting and when is it used?',
        a: 'Hydro-jetting sends a high-pressure water stream through drain lines to cut through grease, mineral scale, and other buildup that a snake can\'t remove. It\'s particularly effective for commercial kitchen drains and for lines with heavy grease accumulation. It leaves the pipe walls clean, not just poked through.',
      },
      {
        q: 'My drain was cleared six months ago and it\'s backing up again. Why?',
        a: 'Recurring clogs usually mean one of three things: root intrusion (roots grow back), a partially collapsed or offset pipe that traps debris, or a grease or soap scum problem in the pipe walls that snaking doesn\'t fully clear. A sewer camera inspection is the right next step to find out which it is.',
      },
      {
        q: 'What is a sewer camera inspection?',
        a: 'We run a flexible waterproof camera through your main sewer line from the cleanout to the street connection. This shows us the exact condition of the pipe — root intrusion, cracks, offset joints, corrosion, or blockages — so we can recommend the right fix rather than guessing.',
      },
    ],
  },

  'plumbing-system-replacements': {
    slug: 'plumbing-system-replacements',
    heroImage: '/images/new-construction-pex.webp',
    heroH1: 'Whole-Home Repiping & Plumbing System Replacement — Gulf Coast',
    metaDescription:
      'Whole-home repiping and plumbing system replacement across the Mississippi Gulf Coast — PEX replacement of galvanized or polybutylene pipe, drain system replacement, and complete system upgrades.',
    includes: [
      'Whole-home supply line repiping with PEX — replacing galvanized, polybutylene, or aging copper',
      'Drain system replacement — replacing cast iron or deteriorated PVC drain lines',
      'Sewer main replacement from house to street connection',
      'Water service line replacement from the meter to the structure',
      'Gas supply line replacement and upgrade',
      'Permit coordination and inspection scheduling',
      'Drywall patching and cleanup included in full repipe projects',
      'Full system pressure test and inspection before project completion',
    ],
    faqs: [
      {
        q: 'How do I know if my home needs to be repiped?',
        a: 'Clear signs include consistently low water pressure throughout the house, discolored water (especially rust-colored), frequent leaks at multiple locations, and a home built before 1970 that\'s never been repiped. Homes with polybutylene pipe (gray plastic, common in Gulf Coast homes built in the 1980s–90s) are particularly strong candidates due to that material\'s known failure rate.',
      },
      {
        q: 'What is polybutylene pipe and why is it a problem?',
        a: 'Polybutylene was a gray plastic pipe used widely from the late 1970s through mid-1990s. It was the subject of major class-action lawsuits because it degrades from the inside out when exposed to chlorine in municipal water, often failing suddenly with no visible external warning. If your home has it, replacement is strongly recommended.',
      },
      {
        q: 'Will a whole-home repipe require major demolition?',
        a: 'Not major, but some wall access is required. We open walls at fixture locations and at points where lines need to be run. Most access points are small. We\'ll tell you upfront what will be opened so you can plan for patching. For full repiping projects we coordinate wall repair as part of the job.',
      },
      {
        q: 'How long does a whole-home repipe take?',
        a: 'Most single-family homes take one to three days for the pipe work. Water is shut off during the active work hours — you\'ll have water in the evenings and mornings. We coordinate the schedule with you and minimize the disruption as much as possible.',
      },
      {
        q: 'Does a repipe increase the value of my home?',
        a: 'Yes. A documented repipe with quality materials removes a significant liability from a real estate transaction. Buyers and their inspectors look for it — especially on Gulf Coast homes built during the galvanized and polybutylene eras. It\'s a legitimate selling point.',
      },
    ],
  },

  'general-service-plumbing': {
    slug: 'general-service-plumbing',
    heroImage: '/images/plumbing-tools-floor.jpg',
    heroH1: 'Licensed Plumbing Service for Any Job — Mississippi Gulf Coast',
    metaDescription:
      'General plumbing service for any residential or commercial plumbing need across the Mississippi Gulf Coast. Call Prestige Plumbing LLC — if it involves plumbing, we handle it.',
    includes: [
      'Residential service calls — any plumbing repair or installation in your home',
      'Commercial service calls — any plumbing issue in your business or commercial property',
      'Same-day service on most non-emergency calls when schedule allows',
      'Honest diagnosis before any work begins — no guesswork billed to you',
      'All pipe materials and fixture types — copper, PEX, PVC, cast iron, and more',
      'Gas line plumbing — natural gas and propane supply lines',
      'Hose bib and outdoor faucet installation and repair',
      '24/7 availability for any situation that can\'t wait',
    ],
    faqs: [
      {
        q: 'What areas do you serve?',
        a: 'We serve the full Mississippi Gulf Coast — Biloxi, Gulfport, Ocean Springs, D\'Iberville, Pascagoula, Bay St. Louis, Long Beach, Pass Christian, Gautier, Moss Point, and the surrounding communities. Call us and describe your location — if you\'re in our coverage area, we\'ll tell you right away.',
      },
      {
        q: 'How do I know what kind of plumber I need?',
        a: 'You don\'t have to figure it out — that\'s our job. Describe what\'s happening when you call, and we\'ll tell you whether it\'s something we can handle (which is most things), whether it requires a specialty, and what we\'d recommend. We don\'t take jobs we can\'t do well.',
      },
      {
        q: 'Do you work on both residential and commercial properties?',
        a: 'Yes. We serve homeowners, property managers, contractors, and businesses. Residential work — repairs, installations, remodeling plumbing. Commercial work — tenant improvements, restaurant plumbing, multi-family properties, ongoing service contracts.',
      },
      {
        q: 'Can I get an estimate before the work starts?',
        a: 'Yes. We assess the situation and give you an honest estimate before any work begins. We don\'t start work and hand you a bill — you know the cost before we turn a wrench.',
      },
      {
        q: 'I\'m not sure if my issue is an emergency. Should I call anyway?',
        a: 'Call us. We\'ll help you assess it over the phone. If it can wait, we\'ll tell you. If it needs immediate attention, we\'ll dispatch right away. There\'s no charge for a phone call, and we\'d rather you call and find out it can wait than wait and have it get worse.',
      },
    ],
  },

}
