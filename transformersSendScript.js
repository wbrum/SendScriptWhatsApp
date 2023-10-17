async function enviarScript(scriptText){
    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));

		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}

	return lines.length;
}

enviarScript(`
  THE TRANSFORMERS

     THE MOVIE


     Written by
    Ron Friedman

  Story Consultant
    Flint Dille


(C) 1986 Sunbow Productions, Inc.

FADE IN

EXT. SPACE

A small planet glows in the light of its sun.

Suddenly, we hear a loud rumble, and see a thick, electronic
mist behind the planet...

Then, the electronic mist begins to engulf the planet, and we
hear the horrible sounds of destruction.

Almost like somebody, or something, is eating it.


          PUSH DOWN TO:

EXT. THE NEAR SIDE OF THE PLANET'S SURFACE

Strange robotic creatures scramble around the planet in a wild panic.
It looks like Pompeii must have looked as Vesuvius erupted.

ANGLE ON ONE OF THE CREATURES - TRACKING

The creature is KRANIX.  We will meet him later on
in a very different context, but for now, he is
running from the ever-growing mist that threatens to
engulf him.

ANOTHER ANGLE - THE PANIC

As Kranix runs, another creature, ARBLUS, calls to him.

    ARBLUS
Transform and flee, Kranix!  You must warn
all you meet of the horror of Unicron!

Suddenly, the pitiful creature is surrounded by the strange
energy cloud and it looks like his body has simultaneously caught
fire and been doused with acid.

    KRANIX
Arblus!  No!

ANGLE ON KRANIX

The mist threatens to engulf him too.
He transforms into a small rocket ship and...

TRACK WITH KRANIX AS...

He takes off.

As we rise higher and higher in the atmosphere, we see the horror
wrought by the hideous and still mysterious Unicron.

The planet cracks like an egg and rivers of lava leak out.

The energy cloud surrounds it and...

Dissolves everything...

...  And when the smoke clears, we get our first look at Unicron.

It is horrifying.

A massive, metal orb with a gaping maw and a field of electricity.

PAN FORWARD to SHOW that this hideous planet is on a direct
collision course with...

MOONS ORBITING CYBERTRON IN DEEP SPACE

There are TWO MECHANISTIC MOONS orbiting the huge planet Cybertron.
But we are most concerned with a small, greenish metal one.

    NARRATOR

It is the year 2005.  The treacherous Decepticons have
conquered the Autobots' home planet of Cybertron.  But
from secret staging grounds on two of Cybertron's moons
the valiant Autobots prepare to retake their homeland.

CLOSER ON GREEN MOON

At first, we see nothing unusual or suspicious.  Then, pulling
closer, we see that the top of the moon is covered with moon
camouflage "netting" and underneath it is a huge cache of
futuristic weapons.

This is the Autobot staging ground for an assault on Cybertron.

DOLLY THROUGH THE COMPLEX until we arrive at a Command Center
where several Autobots peer into monitors,  running constant
surveillance on Cybertron.

ANGLE ON IRONHIDE

He peers into a monitor.

As he speaks, we see the monitor  PAN to an area  where a huge
Decepticon Symbol is emblazoned on Cybertron.

    IRONHIDE

Every time I look into this thing, my
circuits sizzle.  I'm tired of this waiting
game, Prime.  When are we gonna start bustin'
Deceptichops?

ANGLE ON OPTIMUS PRIME

He stands over a holographic map which shows various invasion
plans for Cybertron.

    OPTIMUS PRIME

We still don't have enough Energon cubes to power a
full scale assault, Ironhide.

    IRONHIDE
Then let me make another run to Autobot City
on Earth.  I'll bring you back more cubes than
you'll know what to do with.

ANGLE ON PRIME

He solemnly hands down an order

    PRIME

Alright, ready the shuttle for launch.

ANGLE ON IRONHIDE

He raises a fist in a warwhoop!

    IRONHIDE

YAHOO!
  (looking into monitor)
Your days are numbered now Decepticreeps.

A SMALL MOON "MOUNTAIN"

Ironhide transforms and Races toward a mountain, which stands
about a half mile from the secret Autobot facility.

    OPTIMUS PRIME (V.O.)

Jazz,  report security status.

COMMAND CENTER - ANGLE ON THE CONSOLES

    JAZZ

No sign of Decepticons in this sector, Prime.

    PRIME
What about Moon Base 2?

    JAZZ

Jazz to Moon Base 2.

PAN UP  and through the sky to -

ANOTHER MOON

This is the second moon.  It is much closer to Cybertron than the
first one. This is where  Bumblebee and Spike are stationed.

    JAZZ (V.O.)

Jazz to Moon Base 2.

ANGLE ON BUMBLEBEE AND SPIKE

They stand together a communication console.  Spike is now  35
years old.  Bumblebee looks as he has always looked, save for a
couple of funny bumper stickers on his tail: I (heart)
Cybertron.  I (club) Decepticons.

    BUMBLEBEE

Bumblebee and Spike here.

    JAZZ (V.O.)

We're about to send up the bird.
Any Decepticon shenanigans in your sector?

    BUMBLEBEE

All clear, Jazz.

  (pause)

    SPIKE

Hey, Ironhide, tell my son, Daniel, I miss him,
and tell him I'll be coming home as soon as we've
kicked Megatron's tail across the galaxy.

          CUT TO:

INT. THE SHUTTLE

Ironhide and Prowl sit at the controls, running a series of
pre-launch tests.

    IRONHIDE

Will do, Spike.

ANGLE ON PRIME, CLIFFJUMPER, AND THE OTHERS

Standing at the Command Center, watching:

    PRIME
Commence countdown, Cliffjumper.

    CLIFFJUMPER

Five...Four...Three...Two...

THE  LUNAR  "MOUNTAIN"

Suddenly, smoke starts pouring out of the mountain.

    CLIFFJUMPER
One....

Then, the "mountain" which must be made of paper mache or
something blows away revealing --

The shuttle!

    CLIFFJUMPER (V.O.)

Liftoff.

Suddenly, the shuttle rips out of the ground in a ball of fire.
As it takes off, we realize this isn't any dinky shuttle, but a
massive ship, capable of carrying all the energon  needed to
fight a war and an army to boot.

The screen is bathed in smoke and fire which slowly clears.

ANGLE ON PRIME

As he watches the shuttle shoot into the distance.

    PRIME
Now, all we need is a little Energon
and a lot of luck.

ANGLE BEHIND PRIME

We see a bank of computers.  Suddenly, a small tape deck pops
open...

a cassette pops out and transforms into...

...Laserbeak who flies away unseen.

          DISSOLVE TO:

EXT. SPACE  - LATER

The shuttle  hurtles though a massive asteroid field.

    PROWL (V.O.)

Slow down, Ironhide.  We
want to get to Autobot city in one piece.

          CUT TO:

INT. THE SHUTTLE

Ironhide is at the controls.

    IRONHIDE

If I can dodge Dececpticon rays,
I can sure as shootin' dodge a
couple of asteroids.

Suddenly, there  is a terrible BANG! on the side of the ship, and
the two Autobots are thrown from their seats.

    PROWL

You were saying?

    IRONHIDE (irked)

That wasn't an asteroid.

There is a blast of light and they turn to see...

ANGLE ON THE SHIP

The most powerful laser light anybody has ever seen cuts a gaping
hole in the side of the ship...

Then, when the light clears, a panel of the ship falls in and we
see -

MEGATRON!

In all his glory.

    MEGATRON

Die Autobots!

Then, he transforms to Gun Mode, spins into STARSCREAM'S arms and
Starscream fires.

BRAWN

is cut in half by Megatron's blast.

ON PROWL

as SCAVENGER MELTS HIM DOWN.

THE INSECTICONS

...eat away at the hole in the shuttle to make way for...

...an ARMY of other Decepticons including Laserbeak who enter,
firing.

IRONHIDE AND RATCHET

While FIRING back are FUSED TOGETHER...

... then blasted apart and fall in smoking, glowing fragments.

ON STARSCREAM AND MEGATRON

As they enter the now  empty ship, a number of Decepticons flood
past them, taking positions and searching for other living
Autobots.

    MEGATRON

This was almost too easy, Starscream.

    STARSCREAM

Much easier, oh mighty Megatron, than attacking
the real threat:  the Autobots moon base.

    MEGATRON

You're an idiot, Starscream.  Were we simply to
wipe out that minuscule base, they could build another
one.  But when we slip by their security systems
in their own ship and destroy Autobot city, the
Autobots will be vanquished forever!

    IRONHIDE

Fat chance, Megatron!

Ironhide pulls himself up and grabs onto Megatron who flings him
against the wall.

    MEGATRON

Such heroic nonsense!

          DISSOLVE TO:

EXT. EARTH - CLOSE SHOT- MINIATURE RADAR SCREEN

A child's hands hold a scanner device which tracks a TRAVELING
BLIP across a star map towards a pulsing dot which represents the
Earth.

    DANIEL (V.O.)

The Shuttle just zipped past checkpoint zeta.

ON DANIEL

Daniel, a classic twelve year old American boy watches the
portable viewer which is like an over-sized Boy Scout compass.

WIDEN SHOT to show he is at an old fashioned "fishin' hole" on
Earth - surrounded by weeping willows, assorted trees and shrubs,
and that his fishing pole is stuck in the dirt, the line floating
lazily out on the water.

    DANIEL

Let's watch Ironhide land it, Hot Rod!

As Daniel runs to small skateboard-like device, hits a button,
and watches, it transforms into a hoverboard and rides it, like a
surfer up a steep, grassy hillside we change angle to feature...

HOT ROD

an "adolescent" Autobot.  He is in robot mode, sitting with his
fishing rod held between two fingers, looking bored with it all.

    HOT ROD

Talk about dull......!

Then, he tosses the rod into the water.

ON DANIEL RIDING HIS HOVERBOARD UP THE HILL

    DANIEL

  (calling excitedly)

Hurry or we'll miss it!

HOT ROD

lopes up hill after Daniel.

    HOT ROD

If you're gonna ride, Dan-O ...ride in style!

Hot Rod catches up with Daniel, scoops him off his hoverboard,
TRANSFORMS to automotive mode and RIDES OVER CREST OF HILL with
Daniel in the front seat.

ANOTHER ANGLE - ON AUTOBOT CITY

FOLLOW Hot Rod up and over a roadway leading around the perimeter
of Autobot City which becomes visible the instant Hot Rod clears
the rim of a hill.  As they travel, we SHOULD also be getting a
sense of what Autobot City is all about.

(DESIGN NOTE:  Autobot City looks like a federal energy project
gone mad.  Here, the Autobots are trying to exploit every known
means of getting energy.  The mountain is covered with solar
panels, windmills spin in the valley, oil derricks pump, and not
far away a hydroelectric dam catches millions of volts.  Near all
of these various things are energon  compressors, which turn the
raw energy into energon cubes.

IN THE BACKGROUND of these scenes, we should see various panel
truck-type Autobots cruise up in auto mode to stacks of this
energon,  convert to humanoid mode, load up their vans, then
convert to Auto mode again and drive the Energon into Autobot
City.

In short, it should be  clear that the purpose of Autobot City is
to harvest energy.

All the while, Hot Rod and Daniel are riding recklessly out from
the Autobot City and up into neighboring hills for an overview of
the -

CIRCULAR LANDING AREA

which resides within the "bowl" created by the City structure and
natural surroundings.

    DANIEL

Hey!  Let me out.

    HOT ROD

Why settle for a peek when you can see
everything from Lookout Mountain?

    DANIEL

But we're not supposed to go beyond City
limits!

    HOT ROD

Chromo-Chicken!

ON KUP AND OTHER AUTOBOTS

KUP - a grizzled, "old Soldier" of an Autobot - is directing the
positioning of a large metal road barricade.

Hot Rod barrels through a sign which reads: "STOP -THIS AREA OFF
LIMITS", almost knocking Kup over in dust and wind

KUP

disgustedly watches Hot Rod drive up the mountain.

    KUP

  (to sound like swearing)
Cam bustin', turbo revvin' young punk.

          CUT TO:

MOUNTAIN ABOVE AUTOBOT CITY- LOOKOUT POINT

Hot Rod arrives at a viewing platform carved in mountainside and
TRANSFORMS back to humanoid mode.

Daniel rushes to a set of PUBLIC VIEWING BINOCULARS and peers
into them.

    HOT ROD

This is it!  Now take a squint through those babies.

    DANIEL

Hot Rod, look!  There's a hole in the shuttle!

    HOT ROD

What!?

DANIEL'S P.O.V - BINOCULAR MATTE - THE SHUTTLE

The hole Megatron blasted in order to get into the shuttle mars
the otherwise perfect exterior of the ship.

ANGLE ON DANIEL AND HOT ROD

Hot Rod looks up and a pair of futuristic binoculars pop out of
his eyes.

HOT ROD'S POV - THE SHUTTLE

Hot Rod's vision, now, infinitely better than human vision, spots
something truly disturbing --

-- Starscream, and several Constructicons inside the ship!

    HOT ROD (O.S.)

Decepticons!

ANGLE ON HOT ROD

Drawing his gun, he starts FIRING on the shuttle.

    HOT ROD
This is for Ironhide.  As so's this!

ANGLE ON THE SHUTTLE

Rays streak through the hole searing...

STARSCREAM

He ducks away from the door.

    STARSCREAM

I'm hit!

ANGLE ON MEGATRON

Standing behind a pair of Decepticons who pilot the shuttle, he
turns to see...

THE CONSTRUCTICONS

Firing out of the hole.

MEGATRON

He's furious.

    MEGATRON

You imbecile, our cover is blown!

    STARSCREAM

It was your stupid strategy!

          CUT TO:

ANGLE ON KUP, CONSTRUCTION CREW

Kup and the Autobot Construction Crew watch Hot Rod shooting at
the shuttle.

    KUP

What's that darn fool doing?

Hound looks up and points.

    HOUND
Decepticons!

ANGLE ON THE SHUTTLE

Suddenly it cracks open, and Decepticons shoot out of the
wreckage like toys from a pinata.

CLOSE - MEGATRON

In mid-air

    MEGATRON
  (shouting to forces)
Attack!
  (he looks down and fires)

HOT ROD AND DANIEL

Hot Rod pulls Daniel back as Megatron's BLAST SHEARS OFF the
VIEWING PLATFORM which crumbles and falls down the steep
mountain!

    HOT ROD

Hang on!

Putting Daniel under one arm, he pivots and kicks up at...
...Hook and Scavenger who are descending on him in humanoid
mode...

...causing them both to crash against the mountainside which
starts a...

...landslide which Hot Rod "rides" down the slope, pursued by...

... Decepticon FIRE.

    HOT ROD

  (SHOUTING)
WHoooooooaaah

ANGLE ON BOTTOM OF MOUNTAIN SLOPE - BLITZWING

Blitzwing  flies down in jet mode, transforms to robot
mode, looks up at the "slide riding" Hot Rod and Daniel,
transforms to tank mode and takes aim.

    BLITZWING

  (amused)
Come on down, Autobrat!

ON HOT ROD AND DANIEL

as Hot Rod tumbles, he covers Daniel with his arms and tries
unsuccessfully to slow his fall.

    HOT ROD

Yiiiiiiiiii!

ON BLITZWING

about to fire, when...

...Kup's arm descends into SHOT, spinning Blitzwing's turret
around.

Blitzwing's blast, scorches...

SHRAPNEL

who is flying nearby.

BLITZWING

transforms to robot mode and turns as...

Kup comes flying, feet first, into Blitzwing knocking him off the
mountain ledge.


FOLLOW Kup as he lands in front of Hot Rod, who is just coming to
a  stop at the bottom with Daniel.

    HOT ROD

Not bad for an old timer!

    KUP

  (gruffly)
Old timer?!  That's something you'll never be if
you don't get back to the city.  You know what we
used to do with cocky, insubordinate upstarts?

    HOT ROD

  (interrupting)

Save it.

STARSCREAM

transforming into jet mode, fires on them with laser bursts
which...

... chew up the ground beside them.

HOT ROD AND KUP

with Daniel race toward Autobot City, transforming into vehicle
mode as shots gouge the terrain around them.

          CUT TO:

PERCEPTOR IN MICROSCOPE MODE ON "BATTLEMENT" OF AUTOBOT CITY

he watches...

PERCEPTOR'S POV - THE DECEPTICON ATTACK

Megatron, Insecticons, Constructicons, and other Decepticon
forces attack the city from the sky and ground.

PERCEPTOR

transforms to humanoid and runs toward......

... Three new Autobots, ARCEE, a lovely female Autobot of about
Hot Rod's age, SPRINGER, a very muscular and bantering "Indiana
Jones" type Autobot and ULTRA MAGNUS, the large and soldierly
City Commander.

    PERCEPTOR

Ultra Magnus.....a cursory evaluation
of Decepticon capability indicates a
distinct tactical deficit!

    ULTRA MAGNUS

In other words, Perceptor...

    SPRINGER

  (translating)
We're outnumbered!

He turns and FIRES from his hip.

DIRGE IN JET MODE

Zooms in to strafe as...

SPRINGER'S BLAST...

...Explodes on his wing tip.

SPRINGER, ULTRA MAGNUS AND OTHERS

as Decepticon BOMBS AND LASER FIRE pour in on the City.

    ULTRA MAGNUS

Springer, Arcee, transform Autobot City!

HIGH ANGLE - LOOKING DOWN ON COURTYARD - TRACKING SPRINGER AND ARCEE

    STARSCREAM (V.O.)

Pathetic fools!

STARSCREAM

TRANSFORMS and hovers in robot mode, firing all around
them as they...

..dive for the switch and pull it down.

    STARSCREAM

There's no escape...Uuuuh!

Just then, the floor of the courtyard STARTS TRANSFORMING -
- the center line of the floor snaps shut like the halves of a
gigantic steel shelled clam, trapping Starscream's foot.

    STARSCREAM

Agggggggh!  My foot!

ANGLE ON SPRINGER AND ARCEE

as they make it through an archway which TRANSFORMS INTO A STEEL
SHIELD as they run through

ON STARSCREAM - HIS FOOT STILL CAUGHT IN "CLAM" OF COURTYARD

He struggles to get free before he is crunched by the still
transforming city.

In the nick of time, he shoots a "shoe horn" like projection from
his wrist  and pulls his boot free,  then...

...dodges away.

... The "clam" shape RETRACTS COMPLETELY and more armored
shielding SLIDES INTO PLACE TO COVER where the Courtyard was.

He winces in mid-air and flies away as the city continues to
transform to a fortress below.

          CUT TO:

ANOTHER ANGLE - THE TRANSFORMING CITY

The towers and buildings of the city, picot and retract..

... withdrawing like periscopes, turning and  vanishing into
steel shield coverings.

ON MEGATRON

as he FLIES OVER SCENE, BLASTING this way and that, shouting

    MEGATRON

Breach their defenses!

ON INSECTICONS

who are trailing Megatron, attack the fast CLOSING CITY, trying
to GNAW AND DEVOUR their way through the PORTS and BRIDGES
leading inside.

    KICKBACK

  (Chewing on jamb of doorway
   near bridge)

Delicious, eh Shrapnel?

    SHRAPNEL

  (CHEWING on draw-bridge to
   City)

A little heavy on the electrons.  Electrons.

          ZOOM UP TO:

KUP, HOT ROD AND DANIEL

as Kup and Hot Rod are racing down mountain toward the
transforming city's drawbridge.

    KUP (V.O.)

The Insecticons are in our way.

    HOT ROD (V.O.)

Wrong!  They're our way in!  Yaaaaaaay-hah!

ANOTHER ANGLE

Hot Rod speeds up, passes Kup and...

... rides up and over Kickback's back, using it like a stunt
driver's ramp to...

... hurtle across the open space between Kickback and the doorway
into the city.

ON SHRAPNEL

As Shrapnel looks up and reacts...

...Kup hurtles up and over Kickback's back just as Kickback is
starting to rise to see what knocked him face down onto the
bridge in the first place.

... Kup goes SAILING OT OVER OPEN SPACE between Kickback's back
and the doorway into the city-

-clobbering Shrapnel, who is in the way and landing on the city
doorstep, driving in as...

THE DOORWAY

transforms, shutting down with metal shields with a "clank" sound
as Kickback and Shrapnel both leap at is to...

... bite Kup and Hot Rod and instead BREAK THEIR TEETH on steel
door, falling face down with a grunt as LAST BITS OF CITY
TRANSFORM.

          CUT TO:

INT. CITY SIDE OF DRAWBRIDGE

as Kup and Hot Rod roll in and TRANSFORM where Ultra Magnus is
waiting for them with Perceptor.   Other Autobots are moving into
battle stations in the b.g. and ALARMS SOUND.

Daniel looks on in awe.

    ULTRA MAGNUS

  (sternly)
You can explain your security violation later,
Hot Rod!  Now, man your battle station.

    HOT ROD

I don't have to explain my so called violation
to you or anyone...

    KUP

  (tugs him along roughly)
He said "later!"

Kup moves OFF with Hot Rod and Daniel.

          CUT TO:

BLASTER ON FORTIFIED " CROWS NEST" LOOKOUT TOWER

The "Crows Nest" has windows all around and Blaster's
seat rotates so he can watch action and broadcast battle reports
like a Top 40 Deejay.

Perceptor climbs up ladder into "Crows Nest" from lower level.
As Blaster speaks, we see Decepticons FIRING at the windows of
the Crows Nest but the bursts explode harmlessly against the
glass

    BLASTER

Lookout and shout!  Yow!

Explosions rock the Crows Nest.

Blaster swivels around and tilts to see...

BLASTER'S POV -  INSECTICONS

Chewing on armor plating at the lower edge of the fortified,
transformed city.

BLASTER

activates turret type LASER CANNON

    BLASTER

Gonna lay some slugs on those overweight
bugs!
  (FIRES Laser Cannon)

CANNON SWIVELS

LASER BLAST cooks out and we FOLLOW IT OFF SCREEN to...

THE INSECTICONS

as a Laser BLAST hurls Bombshell up and out of sight and causes
Shrapnel and Kickback to get sucked into the vacuum.

BLASTER

Perceptor joins him.

    BLASTER

  (joyful at his direct hit)
I'm talkin' hits here, Autobuddies! Hits
with a capital "aitch" like in Hard, Heavy and...
  (sees Perceptor)
Hey, Perceptor, what's shakin' other than
this fortress?

BLASTS of enemy fire continue to rock the crows nest as Perceptor
answers

    PERCEPTOR

Blaster, Ultra Magnus sends orders to contact
Optimus Prime for reinforcements.

    BLASTER

Alright!  Cover your receptors, Perceptor!

Blaster transforms to ghetto blaster mode and broadcasts VISIBLE
waves...

THE WAVES

rise and expand into space

    BLASTER

Optimus Prime...  Do you read me?  The Decepticons
are blitzing Autobot City.  We're really takin' a
pounding.  Don't know how much longer we can hold out.

ON WAVES SPREADING THROUGH SPACE

          CUT TO:

MEGATRON LEADING ASSAULT ON TRANSFORMED AUTOBOT CITY

He is FIRING at ARMORED DOOR, trying to melt through when he
reacts to SOUND of Blaster's broadcast for help, stops, and looks
up at CROWS NEST.

    MEGATRON

Soundwave!  Jam that transmission.

ON SOUNDWAVE

SOUNDWAVE moves forward and starts heaving CASSETTES upwards
toward Blaster's Crows Nest position.

    SOUNDWAVE

Rumble!  Frenzy! Ravage! Ratbat! Eject!
Operation:  interference.

ON CASSETTES

as they transform and attack the crows nest.

ON RUMBLE

as he starts PILE DRIVER MOTION on Crows Nest windows

    RUMBLE

First we crack the shell.  Then we crack the
nuts inside.

INSIDE CROWS NEST

as Blaster and Perceptor see Rumble and others and react.
Blaster stops broadcasting.

    BLASTER

We got Cassette Critters knockin' on
the window!

ON RUMBLE

as he CRACKS THROUGH GLASS and he and others swarm in and
attack Perceptor who tries to beat them away

    PERCEPTOR

Run, Blaster! Save yourself!

    BLASTER

No way. Two can play!

ON BLASTER

as he spews out CASSETTES which TRANSFORM into CUBBIE, a lion,
STRIPES, a tiger, STINGER, a scorpion and BOLTS, a small, tough
robot.

    BLASTER

Sic 'em!

ON RUMBLE

as Cubbie takes him down by the foot, turning him over and over

ON STRIPES

as he SNAPS at Ratbat who screams and darts, trying to escape as
we move to

STINGER AND BOLTS

as Bolts swats Frenzy into Stinger who JABS Stinger into Frenzy
making him yowl and run.

PERCEPTOR AND BLASTER

As they fight Decepticons.

    PERCEPTOR

You think you got through to Prime?

    BLASTER

Let's hope so!  Cause if I didn't we're
gonna look like burnt out toaster ovens!

          CUT TO:

LONG SHOT -AUTOBOT CITY BESIEGED

The city shows gaps, dents, smoking holes and Decepticons continue
to pump fire into it and get back sporadic return fire from
inside as...

... Megatron moves INTO SHOT and fills THE SCREEN

    MEGATRON

Constructicons merge for the kill!

IN "PILLBOX" LIKE  GUN EMPLACEMENT IN CITY'S ARMORED WALL

Where Springer and Arcee clear the twisted remains of Autobot
defenders away from a CATAPULT LIKE TORPEDO LAUNCHER.

POV - THROUGH LAUNCHER PORT

we see the mountain where the Decepticons are getting ready for
the final charge.

    SPRINGER

Great! Megatron's making his big push
and we can't even push...
  (struggling to turn Catapult
   around to re-aim it)
...back!

Arcee starts to push beside him.

THE HUGE CATAPULT

moves slowly as we CHANGE ANGLE and Kup, Hot Rod and Daniel ENTER
SHOT.

    KUP

Keep at it, Springer, lad! Help's at
hand!
  (to Hot Rod)
Together now!

Hot Rod joins the others in pushing the huge Catapult into firing
position.

DANIEL

also leans against it, his small legs churning.

THE CATAPULT

starts moving easily now.

ON ARCEE BESIDE HOT ROD

Pushing on the busted catapult.

    ARCEE

  (pushing, manages to speak
   to Hot Rod. She likes him
   but doesn't want to go too
   far)

I was afraid you'd be trapped outside
the city walls.

    HOT ROD

  (likes her, too, but tries to
   be cool and collected)

Hey, I wasn't worried for a micro-second, Arcee!

    ARCEE

  (enjoying letting him have
   it)

Then you probably didn't understand the situation.

Before Hot Rod can react, Kup steps back from repositioned
Catapult

    KUP

That did it!

DANIEL AT LAUNCHER PORT (Opening in "pillbox" through which the
Catapult will fire)

    DANIEL

Kup, Hot Rod!  Look!
  (he points)

THEIR P.O.V. - THE CONSTRUCTICONS

as they start linking themselves together into enormous
DEVASTATOR.

    KUP (V.O.)

Devastator!

ON DEVASTATOR

as he rises up and starts FIRING, HAMMERING, TEARING AWAY at
metal shields which create armored walls of the transformed City.

WIDEN SHOT TO INCLUDE MEGATRON, STARSCREAM, DIRGE, ET, AL.

as they line up behind Devastator, FIRING INTO THE CITY, ready to
follow Devastator inside when he has torn the "roof" off.

ON SPRINGER, ARCEE, HOT ROD, KUP AT CATAPULT

as Springer LOADS TORPEDOES ONTO CATAPULT LIKE SLING

    SPRINGER

I got better things to do today than
die.
  (he FIRES Catapult)

ANGLE ON CATAPULT

as it HURLS FLAMING TORPEDO BOMBS one after the other out the
launch port and we FOLLOW THEM TO

MEGATRON AND OTHER DECEPTICONS

waiting for Devastator to open the way as a succession of
torpedo-bombs explode, knocking them aside, some of the
Torpedo-Bombs strike...

DEVASTATOR

and explode harmlessly as Devastator continues to grunt and tear
off armored layers of the city.  He grabs Hot Rod and Kup and
starts to crush them.

    ARCEE
Hot Rod!
          CUT TO:

EXT. THE EDGE OF THE EARTH'S ATMOSPHERE

as Optimus Prime's Space Shuttle hurtles in.

INSIDE THE SPACE SHUTTLE - OPTIMUS PRIME WITH DINOBOTS

    OPTIMUS PRIME

Dinobots.  Destroy Devastator!

    GRIMLOCK

Uhhhh! Me  Grimlock love challenge!
Dinobots, transform!

DINOBOTS

transform into humanoid mode, and, with Grimlock at the front...

...fly out of the shuttle in wedge formation, blasting in unison.

FOLLOW DINOBOTS

In as they transform again and, in dino mode, swoop over to
Devastator...

DEVASTATOR

Roars towards the Dinobots.

THEIR BATTLE

shakes the Earth...

...buckling City walls, menacing the Autobots inside.  Hot Rod and
Kup are released during the struggle.

ANGLE ON THE DINOBOTS

As they try to destroy Devastator...

...  Their strength is more than matched and soon
they are overwhelmed by him.

          CUT TO:

EXT. THE BATTLEFIELD - MOMENTS LATER

Prime stands outside the dented shuttle with Sunstreaker and
Hound.  As he talks he shoots at a swarm of Decepticons who
battle their way towards him.

    PRIME

Megatron must be stopped.

  (pause)

PRIME'S POV - MEGATRON

The Decepticon leader stands a hundred yards away, vanishing and
reappearing with the shifting waves of Generic Decepticons that
charge back and forth.

    PRIME (V.O.)

No matter the cost.

PRIME'S CHARGE:     A SERIES OF SHOTS

PRIME'S CHARGE - HEROIC BATTLE THEME SONG
  Optimus Prime leader and hero of the Autobots
charges into certain doom.  As he battles his way
through the Decepticons, we HEAR an inspiring anthem
of courage, strength and triumph, like "Eye of the
Tiger".

This theme will reprise during the film when the
Autobots are battling at impossible odds.

He charges headlong into the Decepticon forces which separate him
from Megatron.

Decepticons  fire on  him, but he takes the shots, and...

Spinning and whirling like the Sundance Kid, he takes a lot out.

Then, Decepticons attempt to block his charge and Prime...
...  Like a  powerback, transforms to  Truck Mode and barrels
into them, sending Decepticons  flying around like shards of
glass hit by a .45.

...  finally, he  is engulfed by an incoming swarm, and it
looks like his attack is foiled.

MEGATRON

as he commands his troops.

    MEGATRON

Their defenses are broken.  Let the slaughter
begin.

Then he turns and sees...

    MEGATRON

Prime!?

PRIME

smashing through a wall of lesser Decepticons.

    PRIME

One shall stand, one shall fall.

CLOSE ON MEGATRON

his eyes blazing with hatred.

    MEGATRON

Why throw away your life so recklessly?

ON OPTIMUS PRIME

Dirge takes a sneaky leap at him...

Optimus stiffarms him with a shuddering clank...

...then turns him upside down with one hand and...

...drives him headfirst into the rocky ground, letting him
crumple and fall.

    OPTIMUS PRIME

That's a question you should ask yourself.

MEGATRON

hurls himself at Optimus Prime...

.... both tumble into the walls of the City...

...denting the walls and causing the electronic panels inside to
short circuit, surrounding them with a fiery nimbus of crackling
electrical energy.

Ultra Magnus in car carrier mode barrels out of city carrying
several Autobots.  He and the others transform into robot mode
and fire lasers at the Decepticons.

INTERCUT TO HOT ROD, KUP, DANIEL, ARCEE, BLASTER, PERCEPTOR,
fighting their way to the battle of the titans.

    HOT ROD

We've got to save Prime!

Punching...

    KUP

That's his fight, lad!  Stay away.

Shooting..

...And charging.

ANGLE ON OPTIMUS AND MEGATRON

Megatron attempts to kick Prime in the throat...

...Prime catches his foot, twists it...

... and hurls Megatron backwards into a metal pile.

MEGATRON

grabs a jagged, spearlike piece of steel and hurls it at

PRIME

The steel "spear" pierces his side and sticks in him as...

... he charges Megatron,

...dodging shots from Megatron's gun to...

...deliver a huge UPPERCUT  which...

...lifts Megatron into the air so high that...

... his head butts sharply against overhanging concrete balcony,
mashing him down...

MEGATRON

lands and stealthily slips a laser dagger from his boot, turning
and slashing at...

PRIME

as he comes for him, tearing...

...a gash across Prime's midsection,  which spews smoke and
sparks and...

... dropping Prime to one knee.

    MEGATRON

  (gloating)
Farewell, Prime!

As Megatron hurls the laser dagger as we CHANGE ANGLE to -
OPTIMUS PRIME

as he lifts chunks of broken concrete and catches the laser dagger
on it, tossing it aside as he lunges at-

MEGATRON

who claws his fingers and digs them into Prime's eyes

    MEGATRON

I'll rip out your optics!

Optimus grabs Megatron's clawed hand in one of his hands, twists
it in see-sawing test of strength which...

Optimus wins in a judo toss which sends Megatron -

- skidding face first through steel rubble, in a shower of sparks
until he crashes into the side of the city.

ANGLE ON HOT ROD

He dispatches a Decepticon and turns to Prime.

    HOT ROD

That's showing him, Optimus!

KUP

knocks two Decepticons on their tails and turns.

    KUP

Finish him off, Prime!  Do it now!

ON MEGATRON

as he spots a gun on the ground ahead of him

    MEGATRON

No more, Optimus Prime!  Grant me mercy,
I beg of you!

ANOTHER ANGLE FEATURING OPTIMUS PRIME AND HOT ROD

as Optimus Prime warily moves out to look down at the cowering
Megatron, keeping him in his gun sights.

    OPTIMUS PRIME

You who are without mercy now plead for
it. I thought you were made of sterner
stuff, Megatron!

ON HOT ROD

as he sees Megatron go for the gun and leaps out to grapple with
him

    PRIME

Out of the way, Hot Rod.

MEGATRON AND HOT ROD

as Hot Rod grabs for the Blaster -

- Megatron quickly gets Hot Rod in a headlock and using Hot Rod
as a shield, gets the gun and...

BLASTS PRIME IN THE WOUND HE'D MADE WITH HIS LASER DAGGER

ON OPTIMUS PRIME

his midsection now glowing and smoking, a huge hole where the
Blaster has struck.

ON MEGATRON

firing blaster again and again

    MEGATRON

Fall!  Fall!

Megatron tosses Hot Rod aside like a rag doll and stands above
the dying Prime.

    MEGATRON

I would have waited an eternity for this.
Crawl, slave!  On your knees!

ON OPTIMUS PRIME

as he gathers his remaining strength and smashes Megatron with
both fists clasped together.

    OPTIMUS PRIME

  (gasping painfully)
Never!

He bashes in Megatron's torso casing, fracturing the sides which
split, spilling wires, fuses, lights, circuitry.  Megatron falls!

Prime falls to his knees, tries to rise, collapses to his side
and falls slowly back.

HOT ROD runs over to him.

    HOT ROD

Optimus!  Forgive me!

ANOTHER ANGLE- MEGATRON

Starscream and other Decepticons stand over the smoking body.

    STARSCREAM

  (sarcastic, filled with
   false sympathy)
How do you feel, Mighty Megatron?
  (he kicks Megatron)

    MEGATRON

  (weakly clutching at
   Starscream's hand, gasping)
Enshrine me!

    STARSCREAM

  (drops Megatron's hand
   coldly, calls to other
   Decepticons)

Take this scrap to Cybertron!  Astrotrain,
transform and get us out of here!

ANOTHER ANGLE- ASTROTRAIN

as he MOVES ONTO SCENE in Humanoid mode, showing battle burns
and scars.

Then, he converts to train mode, and rolls through a crowd of
generic Decepticons, crushing many under his wheels, as he makes
his way towards Starscream.

ANGLE ON THE EXODUS

Ramjet, Thrust, Dirge, the Constructicons, Soundwave and his
cassettes, et.al.  run towards Astrotrain.

ANGLE ON KUP AND ARCEE

They fight for a moment, then they notice their attackers are
beating feet...

    ARCEE

The Decepticons are retreating.

    KUP

Prime did it.  He turned the tide!

He shoots (O.S.) into...

A CROWD OF DECEPTICONS

Who fight each other for a place on the shuttle.

ANGLE ON STARSCREAM

dragging Megatron by one leg, callously disregarding the way
Megatron's head and upper body BUMP AND GET KNOCKED from
dragging.

THE AUTOBOTS

fire after them,  closing ranks on the shuttle, and pouring shots
into the melee.

ANGLE ON ASTROTRAIN

Decepticons make way for Starscream as he tosses the nearly
lifeless Megatron into the shuttle and gets in.

Then, standing at the door, he kicks other Decepticons away.

    STARSCREAM

Astrotrain, take off.

ANGLE ON ASTROTRAIN

The shuttle takes off, leaving a number of generic Decepticons
behind, who immediately raise their hands upon realizing that
they are surrounded by Autobots.

          DISSOLVE TO:

OPTIMUS PRIME

as he lies on an improvised bier-like platform, a profusion of
electricity discharging tubes and "plasma" bottle devices hooked
up to his arms and into his gaping middle wound.

SCANNERS

emit bleeps and show oscilloscopic patterns but sounds and wave
patterns are steadily growing weaker and weaker.

PERCEPTOR

is bent over Prime, in microscope mode, examining him...  He then
transforms and straightens up, his voice strained and cracking
with emotion.

    PERCEPTOR

I fear the wounds are...
  (he can't finish what he's
   going to say)

INTERCUT TO HOT ROD, KUP, ARCEE, DANIEL AND OTHER AUTOBOTS as
they react.

    OPTIMUS PRIME

  (using remaining strength
   to makes himself heard)
Autobots...do not grieve...
Soon, I shall be one with the matrix.

    HOT ROD

  (a flash of hope)
Prime!
  (looks off at Prime)

HIS P.O.V. - OPTIMUS PRIME

His head is turned so all assembled can see. His eyes flicker
weakly, his voice RUMBLES with overtone of vast weariness and
resignation

    OPTIMUS PRIME

  (reaches up with right hand
   with great effort)
Ultra Magnus!  It is to you, old friend,
I shall pass the matrix as it was
passed to me ....

ANOTHER ANGLE FEATURING ULTRA MAGNUS

as he steps forward unwillingly, mixed grief and surprise on his
face

    MAGNUS

Prime, I'm just a soldier.  I'm not worthy.

    OPTIMUS PRIME

  (gasping)
Nor was I, but one day, an Autobot
shall rise from our ranks and use the powers of
the Matrix to light our darkest hour.

TIGHT SHOT - ULTRA MAGNUS AND OPTIMUS PRIME

Optimus Prime is tilted into half sitting position by other
Autobots manipulating the platform as Ultra Magnus grasps his
hand with great emotion

    OPTIMUS PRIME

  (voice failing, pressing
   on with it)
Until that day...
Until all are one...
Continue the struggle...
  (sags, gasps, hanging on)
Transfer the Matrix of Leadership.

TIGHTEN SHOT ON ULTRA MAGNUS AND OPTIMUS PRIME

A distraught Ultra Magnus nods, reaches out with free hand and
points his forefinger at Optimus Prime's chest.

Then, pressing a button on Prime's chest, a small, secret doorway
opens, and we see something extremely bright glowing in there.

Ultra Magnus, nearly blinded by the intense light, reaches in,
and lifts out --

THE AUTOBOT LEADERSHIP MATRIX,

-- and holds it for a moment in his hand.

ANGLE ON ALL

The bright light, which emanates from the perfect crystal, seems
to blind everybody and washes all color out of the shot.

Then, slowly, Ultra Magnus moves it into his own chest, closes
the door, and the light is gone, save for a momentary, and
extremely powerful glow from his eyes.

ON KUP, HOT ROD, ARCEE AND PERCEPTOR

They are all full of great sorrow.

ON PRIME - HE DIES

All of his lights go out, including his eyes.

          DISSOLVE TO:

UNICRON

Rotating satellite dishes on the surface spark with electricity.
Dissolve inside Unicron to reveal scenes of Prime's death and the
passing of the Matrix to Ultra Magnus playing on various monitors.
Some of the scenes are in slow motion, others are sped up.  The
effect should be eerie.

          CUT TO:

EXT. ASTROTRAIN

As it whizzes through the Solar System.

    ASTROTRAIN

Jettison some weight, or I'll
never make it to Cybertron.

INT. ASTROTRAIN

The ship is packed with living, dead and wounded Decepticons.
Starscream addresses them like an Athenian Orator.

    STARSCREAM

Fellow Decepticons, Astrotrain has
requested that we lighten our burden!

ANGLE ON BONECRUSHER

    BONECRUSHER

In that case, I say it's survival of the fittest.

    STARSCREAM

So I hear a second on that?

ASSORTED SHOTS

    HEALTHY DECEPTICONS

Aye!

    STARSCREAM

And against?

    NOT HEALTHY DECEPTICONS (weakly)

NAY!

    STARSCREAM

The ayes' have it!

A robotic hand flips a switch, and chaos ensues.  Strong
Decepticons start heave-hoing the weaker ones out into space.

    DECEPTICONS

     (AD LIB)
Beat it!  Spare me!

ANGLE ON STARSCREAM AND MEGATRON

Starscream picks him up and holds him up by the door.

    STARSCREAM
    (sarcastic)
Oh, how it grieves me to do this.

    MEGATRON
Wait, I still function!

Starscream kicks him out.

    STARSCREAM
Wanna bet?

MEGATRON IN SPACE - TRACKING

He shakes his fist.

INT. THE SHIP

The last of the weak Decepticons is tossed, and the others dust
off their hands.

    STARSCREAM

Well, as Megatron has, how shall we say -
departed.  I nominate myself as the new leader.

ON THE CONSTRUCTICONS

    SCRAPPER

The Constructicons form Devastator, the
most powerful robot.  We should rule.

    SOUNDWAVE

Constructicons inferior.  Soundwave superior.

    BONECRUSHER

Who are you calling inferior.

    HOOK

Nobody would follow an uncharismatic
bore like you.

The five cassettes:  BUZZSAW, FRENZY, RUMBLE, RAVAGE AND
LASERBEAK pop from his chest transform, and prepare to attack.

    RUMBLE

Hey, nobody calls Soundwave uncrazmatic.

    FRENZY

Yeah!  Let's kick tailgate.

THE CONSTRUCTICONS

try to form Devastator, but...

    HOOK

Constructicons, unite!

RUMBLE AND FRENZY

quake the ship so hard with their pile-driver arms that, with the
help of Laserbeak, Buzzsaw and Ravage, they keep knocking the
Constructicons off.

    RUMBLE/FRENZY

No way!

Over the battle.

    BLITZWING

I am a triple changer.  I am worth any
two of you.  I should run things.

DIRGE

    DIRGE

Death comes to anyone who crosses me.

He attacks Blitzwing.

EXT. ASTROTRAIN - SAME TIME

He is flying a very wobbly course past Pluto...

    ASTROTRAIN

Stop squabbling or we're gonna crash.

DISSOLVE TO:

EXT. SPACE - LATER

Megatron and the other dented, dinged and dead Decepticon bodies
float through space.

we follow the wailing Megatron and the others down to:

THE SURFACE OF UNICRON

littering the otherwise beautiful technological expanse.

    UNICRON

Welcome, Megatron.

    MEGATRON

  (looking around)
Who said that?

    UNICRON

I am Unicron.

    MEGATRON

Show yourself!

    UNICRON

I have summoned you here for a purpose.

    MEGATRON

Nobody summons Megatron!

    UNICRON

Then it pleases me to be the first.

    MEGATRON

State your business.

    UNICRON

Bring me the Autobot Matrix.
It is the one thing - the only
thing that can stand in my way.

    MEGATRON

You have nothing to fear.  I have already
crushed Optimus Prime with my bare hands.

    UNICRON

You exaggerate.

    MEGATRON

The point is, he is dead!  And the
Matrix died with him.

    UNICRON

No.  It has been passed to their new
leader.  Get it for me.

    MEGATRON

Why should I?  What's in it for me?

    UNICRON

Your bargaining posture is highly
dubious, but very well, I will provide
you with a new body, and new troops to command.

    MEGATRON

And...

    UNICRON

And nothing.
You belong to me now.

    MEGATRON

I belong to nobody.

    UNICRON

Perhaps I misjudged you.  Proceed
on your way to oblivion.

The Mist appears and starts to dissolve Megatron.

    MEGATRON

  (pleading)
No, no.  I accept your terms.  I accept!

    UNICRON

Excellent!  Behold - Galvatron!

X-ray images: wiring, circuitry, etc. flash on and off as a new
and larger being starts to form, changing from dented Megatron to
a huge, new creation: Galvatron.

THE TRANSFORMATION - CREATION

ends in a blinding flash and Galvatron - who still resembles
Megatron - laughs and flexes his muscles and stretches.  His
voice is deeper, different from Megatron's

    GALVATRON

Long live Galvatron!

    UNICRON

And these shall be your minions...

ANGLE ON OTHER DECEPTICONS

Their bodies are turned from battered Decepticons to...

SCOURGE

SCOURGE (Sweep character) is bearded, fanged and ferocious
looking and as soon as he has been CREATED, he roars and
stretches and an ARRAY OF SIMILAR CREATURES - smaller and all
wearing dark and matching uniforms - are INSTANTLY CREATED
FROM OTHERS behind him

    UNICRON

Scourge, the tracker....and his huntsmen...the
Sweeps....

ON CYCLONUS  (NEW DECEPTICON WITH PLANE TRANSFORM ABILITY)

CYCLONUS is CREATED and then his "armada" of similar, but smaller
and similarly colored and clad creatures are formed.

    UNICRON

Cyclonus, the warrior...and his armada.....

ANGLE FEATURING GALVATRON

    GALVATRON

To Cybertron!

He roars with a mad power-rush, gets into Cyclonus (who will be
his personal ship) and leading the armada, takes off for the
distant stars.

    UNICRON

  (loudly proclaiming over
   the scene)
Bring me the Autobot matrix!

DURING UNICRON'S COMMAND we CHANGE ANGLE TO SHOW

LONG SHOT OF UNICRON

as Galvatron and his newly created force FLY UP AND AWAY with
great speed.

    GALVATRON

I will rip open Autobot after Autobot until
it is yours, Unicron.

          CUT TO:

THE DECEPTICON HALL OF HEROES - STARSCREAM

This is the closest thing the Decepticons have to a throne room.
It is a massive, circular room with tombs of old leaders, and a
raised area where Starscream stands.

STARSCREAM AND OTHERS

The Decepticon plane looks slightly ridiculous with cloak on his
shoulders and Thrust and Ramjet at his side, weapons held high,
but ready for action should anybody question Starscream's rule.

In front of him stands Astrotrain holding a huge Metallic CROWN
over his head.

OTHER DECEPTICONS

in neat ranks but their grim expressions show their displeasure.

    STARSCREAM

  (preening)

Get on with the ceremony!

Dirge and others react to EERIE SOUNDS and look up and off.

Starscream looks where others are looking and reacts.

HIS P.O.V. - GALVATRON AND HIS FORCES

as they descend in Hall of Heroes and Galvatron moves out to
confront Starscream

ON STARSCREAM AND GALVATRON

    STARSCREAM

Who disrupts my coronation?

    GALVATRON

Coronation?  This is bad comedy!

    STARSCREAM

Megatron, is that you?

    GALVATRON

Here's a clue!

HIS P.O.V -GALVATRON

as Galvatron transforms into cannon, FIRING A HUGE BURST
ON STARSCREAM

as BLAST hits him.  For a moment, he retains his shape then piece
by piece, he falls apart.

Only a pair of boots remain on the floor.

GALVATRON

He transforms back to robot mode and confronts other Decepticons
boastfully.

    GALVATRON

Will anyone else attempt to fill his
shoes?

ON DECEPTICONS - THRUST, DIRGE, ASTROTRAIN, BONECRUSHER, ET. AL.
PAN for their reactions as they ponder for a brief beat and then
exchange looks/

    DECEPTICONS
     (AD LIB)
     LONG LIVE...
  (they look at each other)
What did he say his name was.

He didn't.

    GALVATRON

Galvatron.

    DECEPTICONS

LONG LIVE GALVATRON!

          CUT TO:

UNICRON

Bit by bit, we see new sections of the planet being generated.

Then, the sinister mist we saw at the beginning of the film
starts pouring out.

He's about to do the big munch on..

THE FIRST MOON OF CYBERTRON -

PUSH IN TO - JAZZ AND CLIFFJUMPER

Standing outside the "netted" complex, looking off at...

UNICRON

A strange, LOUD HUM fills the air and the ground heaves and
SHAKES beneath their feet

    JAZZ

Where'd that come from?!

    CLIFFJUMPER

Who cares?  I'm more worried about where it's going!

    JAZZ

  (on communicator device)
Talk to me, Earth!  We got a situation
out here!

          CUT TO:

AUTOBOT CITY- EARTH -LONG SHOT

Autobot City is almost rebuilt, and we see Kup and Hot Rod working
with other Autobots to move large panels into position.  In the
background, two huge SPACE SHUTTLES are almost completed and
Ultra Magnus is directing the work.  During this ESTABLISHING
SERIES OF SHOTS, we HEAR JAZZ'S VOICE OVER

    JAZZ (V.O.-FILTER)

Roger me.  Wilco me.  Anything?  Hello.
Hello Earth.

          CUT TO:

OUTSIDE OF LARGE SPACE SHUTTLE UNDER CONSTRUCTION

Springer and Arcee fit a hull section in place with Daniel
motioning to them, directing the action.

BLASTER

He reacts to muffled transmission from Jazz.

    BLASTER

I'm pickin' up a faint signal!

BLASTER TRANSFORMS to blaster mode and Jazz's VOICE is broadcast
loud and clear causing Springer, Arcee, and Daniel to react

    JAZZ (V.O.-ON FILTER)

This is Jazz.  I gi-normous weird lookin'
planet just showed up in the suburbs of
Cybertron....

    CLIFFJUMPER

And it's attack...

STATIC obscures the message

    ULTRA MAGNUS

Jazz!  Cliffjumper!

          CUT TO:

THE FIRST MOON

is covered by Unicron's energy field, and slowly seems to
dissolve.

ANOTHER ANGLE FEATURING UNICRON

a great maw works more intensely crushing bits of the planet.

          CUT TO:

JAZZ AND CLIFFJUMPER ON THAT MOON

as quakes, tremors and cyclonic winds toss and tear at all
structures on the moon and the energy field closes in on Jazz and
Cliffjumper - who, using handholds every step of the way - et
into

AN ESCAPE POD VEHICLE

as Unicron looms larger, larger, the energy field seems to
dissolve the landscape.

    JAZZ
Got ...to....blast free....if we can.....

They get in and start retro blasters, the flame of blasters
whirling in wild winds as moon is engulfed.

          CUT TO:

    CLIFFJUMPER (V.O.)

Ignition and....

SOUNDS of torrential winds, quakes, etc as moon is quickly
becoming Unicron's lunch.

    JAZZ (V.O.)

Hit it!

ON ESCAPE POD

as it BLASTS OFF and away from Unicron with an EXPLOSION.

For a moment, it looks like they are going to get clean away,
but...

ANOTHER ANGLE

Suddenly it is pulled deep into Unicron.

ANOTHER ANGLE - THE MOON

as Moon shatters like a hollow egg and is sucked completely into
Unicron's maw which closes around it with a snap.

          CUT TO:

GALVATRON IN DECEPTICON HALL OF HEROES

Silence. No more winds. No more movement.

    GALVATRON

How dare Unicron?!
  (defiant)
Cybertron and all it's moons are mine!

ANOTHER ANGLE ON GALVATRON

His body starts to twist making him writhe in pain powerless to
resist

    SCOURGE

But remember, WE belong to HIM!

    GALVATRON

  (gasping for breath,
   writhing, nods)
I....will obey, Unicron!  Decepticons, to Earth!

The torture stops and Galvatron clutches his throat and tries to
regain his composure as we...

          CUT TO:

EXT. AUTOBOT CITY -- ULTRA MAGNUS

He has a portable communication device.  Spike and Bumble can be
seen on it.  Springer, Kup, the Dinobots, Blurr, and Hot Rod
look on amid general gathering of Autobots.  Arcee holds Daniel
up on her shoulder so he can see.  Blaster is in b.g.

    SPIKE

It's like a terrible nightmare, Ultra Magnus.

    BUMBLEBEE

This thing - this juggernaut just ripped the
first moon to shreds.

    SPIKE

And it's heading this way.

    BUMBLEBEE

We'll try 'n slow it down...

    SPIKE

But you'd better get here fast because...

Suddenly, static obscures the transmission.

    DANIEL

Dad!

    ULTRA MAGNUS

Autobots, prepare to board the shuttles.
This new menace is more dangerous than all the
Decepticons put together.  Somehow we must
destroy it before it devours Cybertron.

    DANIEL

But what about my dad?  He's on the moon
between that monster and Cybertron.

    ULTRA MAGNUS

Daniel, I'll do everything I can for Spike.

    HOT ROD

And what are we going to do when we get
there?  If that thing crunches moons, it'll
make short work of us.

    ULTRA MAGNUS

Maybe the Matrix can stop it.

    HOT ROD

You're right!  It can.

    KUP

What do you know about it lad?

    HOT ROD

It's just a feeling.

Hot Rod looks up and sees something.

    KUP

Look!

THE AUTOBOTS TURN TO SEE

POV - ANGLE ON ATTACKING DECEPTICONS

Decepticon ships seem to dive from nowhere to attack the
Autobots.

    ULTRA MAGNUS

To the shuttles!!!

ANGLE ON DECEPTICON JETS

Galvatron is in the lead.

    GALVATRON

There is no escape.  I, Galvatron
will crush you just as the magnificent Megatron
crushed Prime!

    ULTRA MAGNUS

And you'll die trying just like Megatron!

Ultra Magnus fires Laser and hits Galvatron.

    GALVATRON

aaaaaaaah!  Autobot cur!!

    CYCLONUS

You want me to gut Ultra Magnus for you?

    GALVATRON

There are plenty of Autobots for you.
Ultra Magnus is mine!

THE BATTLE - QUICK CUT

Decepticons dive on fleeing Autobots.

ANGLE - ARCEE AND DANIEL

As Daniel looks up and Arcee moves over to him protectively.

Hot Rod looks at Arcee in the same way she is looking at Daniel.

    ARCEE

Stay close to me, Daniel...

    HOT ROD

  (to Arcee)
And you better stay close to me...

Arcee pulls Hot Rod toward her before he gets hit by laser

    ARCEE

No, you'd better stay close to me.

Blurr is trying to get Grimlock into Shuttle with the rest of the
Dinobots as Decepticon FIRE COMES IN ALL AROUND. Grimlock is like
a "spooked horse" refusing to be shut in the barn.

    BLURR

  (pleading with him, shoving
   him, talking very, very
   rapidly)

Nice Dino, good, Dino, sweet Dino!  Won't
you step into the nice spaceship for Blurr?
Please, pretty please.

    GRIMLOCK

  (sticking head out past
   struggling Blurr)
Me, Grimlock, not "nice Dino!" Me bash brains!

HIS P.O.V. - SEVERAL DECEPTICON JETS COMING AT HIM

GRIMLOCK

He gives FIRE BREATHING BLAST AT JETS as they go by STRAFING THE
SHUTTLE , SHOTS RICOCHETING AROUND GRIMLOCK AND BLURR

THE DECEPTICON JETS

as Grimlock's BLAST SETS THEM ALL ON FIRE and they spin into one

another as we CHANGE ANGLE TO

ULTRA MAGNUS

as Kup, Hot Rod and Arcee MOVE INTO SCENE BEHIND HIM

    ULTRA MAGNUS

Kup, Hot Rod.  Get the Dinobots out of here!

KUP AND HOT ROD

as they run into Dinobot Shuttle, retracting their entry ramp in
HAIL OF FIRE FROM SCOURGE AND HIS SWEEPS.

ON SCOURGE

as he TRANSFORMS to Humanoid mode and shouts orders, FIRING AT
Blurr who BLURRS PAST and then at Arcee who also SHIPS BY

    SCOURGE

No survivors!

IN DINOBOT SHUTTLE

as Hot Rod squeezes past   Sludge Swoop, and Slag to join Kup who
is already at control deck where Grimlock sticks his head down to
look out the window. Kup shoves him aside.

    KUP

This reminds me of the battle on Alpha 9, when the
Petro-Rabbits were...(annoyed) Grimlock, get your
noodle out of my face!
  (starts throwing switches)

    GRIMLOCK

Me, Grimlock, love Kup's war stories!

    KUP

You're living one now!
  (to Hot Rod)
Engage the boosters for Cybertron's sake!

Hot Rod nods and quickly passes his hand over bank of SWITCHES
all of which GLOW AND PULSE with the action.

ANOTHER ANGLE

as DECEPTICON FIREBALL COMES UP and SPLATTERS AGAINST WINDOW,
sending tongues of fire running across the glass behind Hot Rod's
head

    HOT ROD

You got 'em!

BACK TO KUP AND GRIMLOCK

Grimlock still trying to stick his face in the control panel as
Kup works furiously and more DECEPTICON FIRE HITS THE SHIP

    GRIMLOCK

  (to Kup)
Tell Grimlock about Petro-Rabbits again.

    KUP

  (muttering, using joystick)
I'll give you Petro-Rabbits.  Contact!

The Shuttle lurches and shakes

ANGLE ON SHUTTLE WITH DINOBOTS

It takes off amidst a hail of Decepticon fire.

    HOT ROD (V.O.)

Yaaaaaaaaho! We're airborne!

    GRIMLOCK (V.O.)

Groooooowwwwwrrrr!

ON CYCLONUS AND HIS "WING" OF PLANES

as they bank down toward RISING SHUTTLE FAR BELOW.

    CYCLONUS

Vaporize them!

Jets streak down toward upward rising Shuttle as we

          CUT TO:

ANOTHER PART OF SHUTTLE LAUNCH AREA

Springer springs onto scene with Daniel, Ultra Magnus and
Perceptor are guarding the entry ramp, firing at Decepticons.

    SPRINGER

  (to Daniel)
Looks like we're shipmates, squirt!

    DANIEL

All right!

    SPRINGER

But if you get space sick, you're gonna
walk home.

ANOTHER ANGLE FEATURING ULTRA MAGNUS AND PERCEPTOR

    ULTRA MAGNUS

Hurry!


Blurr blurs up ramp.  Arcee reaches the ramp as the shuttle takes
off horizontally.

ON BOARD THE SHUTTLE- ANGLE ON SPRINGER

as he reaches down for Arcee.

    SPRINGER

Jump.

ON ARCEE

still  going up the ramp while the shuttle slowly leaves the
ground.

Just as the  wind and gravity are about to knock her off, she
jumps up  and...

INSIDE THE SHUTTLE

Springer grabs her hand and pulls her in, narrowly avoiding a
barrage

Daniel is watching, terrified.

    DANIEL

That was close!

Concussion of Decepticon hit rocks the shuttle

    SPRINGER

Believe it or not, this is the fun part.

IN "COCKPIT" OF ULTRA MAGNUS' SHUTTLE

Ultra Magnus is at control deck with Perceptor as they "taxi" for
launch and we see oncoming Decepticon jets firing at them

    ULTRA MAGNUS

No time to preheat....Can this ship take
it?

    PERCEPTOR

With an accelerated ignition procedure
the ceramic housings might create a magnetic
flux.

    ULTRA MAGNUS

  (baffled)
What?

    SPRINGER

  (ENTERING SHOT, reaches in
   and pushes joystick
   forward)
He says "go for it!"

Powerful rockets ignite, and the shuttle  SHAKES with the sound.

ANGLE ON RUNWAY

The Shuttle's rockets surge, melting the pursuing  Sweeps as the
Shuttle hits the sky and soars upwards.

ON DINOBOT SHUTTLE

Cyclonus' Jets  fire on it, as we CHANGE ANGLE

ON ULTRA MAGNUS' SHUTTLE

It roars up behind Cyclonus' jets and overtakes and smashes
through them, scattering them as it pulls up alongside the
Dinobot shuttle

INT. DINOBOT SHUTTLE- KUP AND HOT ROD IN "COCKPIT"

Grimlock is peering out of the side ports.

HOT ROD

gives the thumbs up gesture.

ANOTHER ANGLE

INCLUDING Ultra Magnus' shuttle through side port as Springer
gives thumbs up signal in return and Daniel waves

ON SPRINGER

as he turns and reacts, looking straight up and ahead

    SPRINGER

It ought to be smooth sailin' from here on in.

ON ASTROTRAIN AND DECEPTICON JETS

    ASTROTRAIN

Fuse them!

Astrotrain starts diving into upcoming Shuttles BLASTING AWAY.

INT. DINOBOT SHUTTLE - "COCKPIT"

as Kup struggles to hold controls, his shuttle also ROCKING from
direct hits

    KUP

  (using intercom)

Ultra Magnus...what next?

INT. ULTRA MAGNUS' SHUTTLE - "COCKPIT"

shuttle ROCKS WITH DIRECT HITS as Ultra Magnus struggles with
controls

    ULTRA MAGNUS

Remember what we did off Beta Four!

    KUP

I remember it well.

ON THE SHUTTLES

They fire (O.S.) at...

A LARGE ASTEROID

With incredible precision, the rays strike the asteroid,
splitting it in two parts.

ANGLE ON ONE OF THE ASTEROID HALVES

It shoots through space and strikes another asteroid, which,
breaks into several pieces, many of them angling back towards...

GALVATRON'S SHIPS

which swerve to  avoid them as....

THE OTHER ASTEROID PART

Hits another moon or asteroid  or general rock in space, doing
the same thing...

WIDEN SHOT to show that the pieces are shooting around like pool
balls after an incredibly violent  break...

...  zinging into each other...

....  Narrowly missing Galvatron's ship...

... Filling space with incredible amounts of Dust, lava  from

inside the moons, multi-colored gasses, explosions and generally

making a mess of space.  (Note: think of this scene as the

"Asteroids" video game.)

ANGLE ON THE AUTOBOT SHUTTLES

As all of this is going on, they jam into hyperspace...

... Corkscrewing and arcing off into the galaxy, leaving only

blurred images of themselves as...

GALVATRON'S SHIP

emerges from the chaos.

ON CYCLONUS

    CYCLONUS

The explosions jammed my sensors.
  (pause)
I have lost track of the Autobots!

ON GALVATRON

    GALVATRON

Damn it!!  They did the same thing
to me off Beta four!

          DISSOLVE TO:

DEEP AND SERENE SPACE - ULTRA MAGNUS' SHUTTLE AND DINOBOT
SHUTTLE

Possible song - optimistic adventure
with the suggestion that all dreams
might not happen.


as both shuttles soar majestically through the vast depth of
infinite space.

    ULTRA MAGNUS (V.O.)

Congratulations Autobots, we've lost
'em at least for a while.  So rest up.  We'll
refuel on the Junk Planet and work out our
battle plan there.

INT. DINOBOT SHUTTLE - KUP

Kup sits spinning yarns, leaning back in chair as Grimlock,
Sludge, Slag and Swoop lie, lounge, sit with chin on hands, all
listening like little kids to a bedtime story - in rapt attention

    KUP
Yep, I remember the dust was so thick off Beta 4
had to use windshield wipers on your optic
sensors....

    GRIMLOCK
  (impatiently)
Me, Grimlock, know all about wipers!
Want to hear good part of story!

    SWOOP
  (beating wings rapidly,
   excitedly)
Good part, Kup! Tell Swoop good part!

SLUDGE                                  SLAG

 (excitedly)                          (beating tail on
Unh unh unh....                         floor)
        Good part...tell
        ...tell...

    KUP
Okay, Okay.  The dust was really thick and
then this gigantic Ick Yak...

ON HOT ROD

He is practicing sparring with a SPINNING AUTO-COMBATANT - a very
high tech quintain with many arms, legs, and weapons that test
the user's skills, and reflexes.

Hot Rod wears sparring gauntlet, and holds a small LASER DAGGER
and special shield.

As he lowers shield and reacts to Dinobot reactions to Kup's
story.

    HOT ROD

Don't you think we have better things
to do now than tell stories Kup?

    KUP

Like what?

    HOT ROD

Like maybe figure out how we're gonna stay alive.

    DINOBOTS
  (ALL SHUSH HIM)

As he is speaking, Auto-Combatant "sees" its opening and gives
Hot Rod a swift kick in the rear, sending him flying (o.s.)

THE AUTO COMBATANT

Then hammers its fists on top of his head...

ON HOT ROD

Irked.

    HOT ROD
  (continuing)
Time out, for Cybertron's sake!

ON AUTO-COMBATANT'S FACE
as it sticks out a metal tongue and gives him a LOUD RASPBERRY

BACK TO SCENE

as Hot Rod  rises and draws his fist back to clobber the

Auto-Combatant

    AUTO COMBATANT
  (mechanically, quickly)
Time out, time out, time out!

Suddenly, the shuttle rocks from impact and SPARKS and flames
shoot out of large hole in wall

ON ULTRA MAGNUS AT CONSOLE INTERCOM

    ULTRA MAGNUS

Kup! Raise your force fields at once!  They're
armed with.....

ON GALVATRON ON "BRIDGE" OF FLAT TOP

as he presses firing button ...

    ULTRA MAGNUS (V.O.)
Moleculon Missiles!

ANGLE ON GALVATRON'S CARRIER

Particularly deadly looking missiles shoot out.

ANGLE ON THE DINOBOT SHUTTLE

It zooms towards a whopper of a planet, surrounded by several
small moons.  We will later learn that this planet is Quintesson,
but for now, it's mysterious.

The moleculon missiles streak after it like sidewinders.

INT. THE DINOBOT SHUTTLE

Kup and Hot Rod pilot the thing for all it's worth.

    HOT ROD
They're closing on us!

    KUP
Yep, like the shrikebats of Dromedon!

    HOT ROD
Yeah, how'd you beat them?

    KUP
I'm trying to remember...there were an awful
lot of casualties that day...

ANGLE ON THE SHUTTLE AND MISSILES

The missiles streak toward them.

    KUP (O.S.)
Oh yeah, we inversed polarities.

    HOT ROD (O.S.)
That'll tear the ship apart!

    KUP (O.S.)
You got a better idea?!!

With that, the ship seems to stop, on a dime, in mid air!

The missiles zoom past it.

INT. THE SHIP (KUP AND HOT ROD)

Hot Rod watches wide-eyed, as Kup watches ahead warily, hands on
the controls.

    HOT ROD

Okay, so you were right.

    KUP

Don't run your programs until they're debugged.

ANGLE OUT THE VIEWSCREEN

Suddenly, the moleculon missiles, reverse course and start coming
back.

    HOT ROD
They're coming back.

    KUP
Let's just hope we've screwed up their
trajectories.

ANGLE ON THE MISSILES

The missiles sidewind towards them, then their paths cross and
BOOOM!

Everything flashes white.

ANGLE ON THE DINOBOT SHUTTLE

    HOT ROD
Whew!!!

INT. THE DINOBOT SHUTTLE

Kup and Hot Rod look forward, their eyes, blinking, as if
strained.

    KUP
Yep, I thought we'd had it that time
for sure.

EXT. ANGLE ON THE SHIP

It sits next to a gigantic alien-made moon.  Suddenly, a hatch
opens and a massive grabber that looks like a lobster  claw
shoots out at it.

ANGLE ON HOT ROD

He sees the claw coming out of the viewscreen.

    HOT ROD
Dive!

ANGLE THROUGH THE VIEWSCREEN

The claw snaps on the front of the ship, smashing the window
and...

ANOTHER ANGLE

crushing the area between Hot Rod and Kup.

SPACE - ANGLE ON THE SHIP

As it explodes, flinging the Autobots inside down toward the
Quintesson's planet.

          CUT TO:

GALVATRON PURSUING ULTRA MAGNUS' SHUTTLE

          CUT TO:

INT. ULTRA MAGNUS' SHUTTLE - ULTRA MAGNUS, SPRINGER

as they man control panel in cockpit.  In the background, Blurr
and Arcee work to patch other holes in hull and Daniel helps
them.

Perceptor slowly plots coordinates on light-up table, oblivious
to

SHAKES AND ROCKINGS of their ship.

    SPRINGER

Kup and Hot Rod just bought it!

    ULTRA MAGNUS

I can't deal with that now.

    SPRINGER

Face it, Magnus, the Decepticons 're
gonna dog us until they see us dead!

Ultra Magnus nods solemnly

    ULTRA MAGNUS
  (cryptic)

Then that's exactly what they're gonna
see.

          CUT TO:

THE DECEPTICON FLAT TOP AND CYCLONUS' ARMADA

ON GALVATRON
as he works controls which eject more Moleculon Missiles.

HIS P.O.V. - ULTRA MAGNUS' SHUTTLE

electrical outline envelopes it and there is a...
... blinding flash after which...
..  remnants of the hull and superstructure explode toward camera
and past camera accompanied by explosive sound and then, silence!
... Where the shuttle had been there is now...nothing!  Just loose
asteroids and clouds of space dust

    CYCLONUS

The Autobots have been terminated!

    GALVATRON

Excellent.  And soon we shall say the
same of that infernal Unicron.

Suddenly, Galvatron's body begins to twist, and he writhes in
pain.

    GALVATRON (CONT)

Aaaah!  Take me to Unicron...Aaaah!

LONG SHOT ON THE HUGE FLAT TOP

as it veers off and away from the space cloud, followed by
Cyclonus' Armada.

Hold for a beat, and then CLOSE IN on the dust cloud as...

... part of Ultra Magnus' shuttle flies into the clear.

ANGLE ON THE COCKPIT

Arcee, Perceptor, Springer, Blurr are crowded together in cramped
remnant of cockpit as Daniel and Ultra Magnus sit at the control
deck

    ARCEE

Did we have to detonate three- quarters
of the ship?!

    SPRINGER

Seeing how they would have detonated
four quarters, I think it was a good choice.

SUDDEN SHUDDER AND THE SHIP DROPS SHARPLY, all holding on to each
other and to any protruding handhold

    ULTRA MAGNUS

Perceptor....can you still locate the Junk Planet?

    PERCEPTOR

Gamma waves in this sector of space create
marginal navigation probabilities, however.....
  (looks at Ultra Magnus)

ULTRA MAGNUS

Holds his head in his hands as Springer grimaces

RESUME ON PERCEPTOR

realizes he's overdoing it again, clears his throat

    PERCEPTOR

Ahem.....yes I think I can.

LONG SHOT- SHUTTLE CHANGING COURSE TOWARD LARGE DISTANT PLANET

which we see as dim shadow on the edge of space

          CUT TO:

A small, falling object appears high above Quintesson and hurtles
down, down, over and over until it is in view and we see it is...

HOT ROD

still cartwheeling down toward the planet below, trying to change
the angle of his fall

HOT ROD - TRACKING

He plummets down through layers of atmosphere and continues to
fall past shiny rock pinnacles of unusual construction as we
CHANGE ANGLES TO

AERIAL VIEW OVER A VAST SEA OF LIQUID ENERGY

as Hot Rod falls into the sea, we CUT TO

THE SILVERY ENERGY SEA

Hot Rod sinks to the bottom where he collides with...

... a metallic reef, bounces, manages to right himself, shaking
his head as he regains equilibrium, and...

Then he transforms into auto mode modified for undersea action
and starts riding off as he calls through intercom.

    HOT ROD

  (bubbling, filtered voice)
Kup....Grimlock?   Slag!....Anybody?

WE FOLLOW him through undersea world as he rounds a "corner" of
the Reef Wall and reacts

HIS P.O.V. - A HUGE, MECHANICAL 0 SQUID CREATURE

The ROBOTOID SQUID is tearing Kup to pieces and tossing the
pieces across the ocean floor with its silvery metal tentacles

ON HOT ROD

    HOT ROD

Kup!

He transforms and blasts...

THE SQUID

angrily streaks toward Hot Rod.

HOT ROD

Fires at the Squid, but not stopping him.

ANOTHER ANGLE

Hot Rod's shot plinks off a couple of tentacles, but the squid
keeps coming...

... Wraps his tentacles around Hot Rod and starts crushing...

... Hot Rod looks like he's about to be crushed, but he...

... Shoots

... Its hideous Optical Sensor.

THE SQUID

releases a laser print ink stream which boils out in the water in
a series of dots and "x" shapes and retreats.

    HOT ROD

Don't worry, I'm not coming after you.

HOT ROD

lowers his head and blows blast of air through head-piece.  The
air blast clears the water, revealing Kup's head and torso half
buried in the "sand"

ON HOT ROD AND KUP'S HEAD

as hot Rod kneels

    HOT ROD

Kup!  Say something!

CLOSE ON KUP'S HEAD

as he turns head around to look up at Hot Rod and spits out a
mouthful of sand

    KUP

  (bubbling as he speaks)
Fix me!

    HOT ROD

Sure, Kup....right away!

Hot Rod rapidly PULLS KUP'S SCATTERED BODY PARTS TOGETHER.

          CUT TO:

KUP AND HOT ROD ON THE RED DESERT SHORE OF THE ENERGY SEA

Kup stands impatiently while Hot Rod reassembles them.

    HOT ROD

Well...what do you think?

Kup feels his elbow joint, twists his neck side to side and gets
creaks and squeaks and moves legs in odd, creaky way as he is
trying himself out.

    KUP

  (a beat, then grimaces)
There's a piece missing.

    HOT ROD

No way....
  (sifts through pile of
   SCRAP METAL PARTS lying
   at Kup's feet)

See, this wasn't yours...it's some kind
of prehistoric ion cruncher....and this
doohickey looks like a funky energon
funnel...  and this...

    KUP
  (moving up and back, bending
   arms and hands, CREAKING,
   CLUNKING, SQUEAKING)

Well, I still think I'm short a part!
  (sees Hot Rod hang his head)
But all things considered, you did an
amazing job, lad!  Amazing!

    HOT ROD
  (brightening)

Really?

    KUP
  (rotates arm rapidly)

Yeah, you even got rid of a nasty burr on my
rotator!  Now, let's find the Dinos and
get off this twisted planet!

ON KUP

as he transforms it's evident that a fender is misplaced and a
wheel mounted improperly so it wobbles and he rides unevenly with
much chugging and oil spewing

    KUP (V.O.)
  (in vehicular mode)

Of all the circuit glitched diode blowin'
dim-wittery...  I told you a part was
missin'.

we watch Hot Rod and Kup move off into the distance as we:

DISSOLVE TO:

ANOTHER PART OF QUINTESSON

Kup and Hot Rod walk along a swampy, marshy area.

Suddenly, there are several loud gurgles, and we can see the
shapes of something terrible emerging through the muck.

Hot Rod spins to fire, but Kup bats down his arm.

PAN TO SHOW

EIGHT SHARKTICONS (in humanoid mode) surrounding them.  The
Sharkticons are smaller than the Autobots, but they look ugly and
vicious.

    KUP

Don't act hostile.  I'll use the universal greeting.

    HOT ROD

Universal Greeting.

    KUP

Watch.  I'll have them eating out of
my hand.

    HOT ROD

Or our faces.

Kup holds out his hands to show that he has no weapon.  Then, he
addresses them...

    KUP

Bah-weep-Graaaaagnah wheep ni ni bong...

    HOT ROD
  (mocking, mimicking)

Bah-weep-Graaaaagnah wheep ni ni bong...

The Sharkticons look interested.

    SHARKTICONS

  (GROWL VERSION OF THE SAME
   THING)


    KUP
See, the Universal Greeting works every
time.
  (pause)
Now, without making any sudden moves,
give them an Energon goody.

Kup reaches into his belt, presses a button and pulls out an
Energon cube.  Hot Rod, somewhat suspicious of the whole process
does the came.

They hold out the cubes and two of the Sharkticons take the
Energon cubes, like dogs getting a treat.

Then, the other six show up looking for cubes.

    HOT ROD
This is getting expensive.

    KUP
Don't worry, they'll reciprocate.

They each hand out three Energon goodies to the remaining six
Sharkticons... The Sharkticons eat them happily.

Then, they back off, eyeing the two Autobots with menace.


    HOT ROD

I thought they were supposed to reciprocate.

    KUP

  (not sure of himself)

Customs vary from place to place.

Suddenly, the Sharkticons transform to their vicious mode and
lunge at them.

The two robots, taken by surprise, fall backwards.

PAN FROM the fallen robots to an area behind a tree.  For just a
moment, we see a small yellow Autobot in robot mode.  There, then,
as quickly as we realize what it is, it transforms into automode
and vanishes in a flash.
It was Wheelie.

THE SHARKTICON CAMP ON QUINTESSON - KUP, HOT ROD AND SHARKTICONS

Sharkticons march Kup and Hot Rod into a HOLDING PEN within a
walled compound.

As we FOLLOW THEM INTO PEN we PULL BACK and PAN to establish that
entry procession is being watched by...

THE QUINTESSONS

slender, spindly framed robotic creatures with oversized five
sided heads, each side bearing a different mechanistic face with
a different expression on each - smiling, angry, grimacing,
suspicious and the fifth face is not yet to be seen.

As Hot Rod and Kup are led to certain death in the Quintesson
dungeons, harsh, dissonant, metallic and terrifying music plays,
underscoring the brutal evil they face,

    KUP (V.O.)

Reminds me of the Niter Slave Mines on
Golgonath Seven....

    HOT ROD

Every place reminds you of some place
else.....

    KUP (V.O.)

Experience, lad.  You should learn to appreciate
it.

    HOT ROD

A lot of good it's done us so far!

ON HOT ROD AND KUP

as Hot Rod looks around and reacts sharply

HIS P.O.V.- THE QUINTESSONS

as we feature the Leader Quintesson who is taller and wears a
different color robe from others.  He is watching arrival of Kup
and Hot Rod and his faces rotate so it goes from smiling face to
suspicious face to angry face to furious grimace.

RESUME ON HOT ROD AND KUP

as Sharkticons shove and prod them, JOLTING them into the holding
pen and locking the gate.

Then, they install RESTRAINING BOLTS.

    HOT ROD

I can't transform!

    KUP

They're restraining bolts, lad.

    HOT ROD

  (looking around)
We got to get a new travel agent....  What
is this place?

PAN FROM HIS P.O.V. - A SHADOWED, ALCOVE LIKE HUT

as a figure moves forward slightly and speaks in a harsh, bass'o
voice.  It is GRANIX.  We saw him in the first scene, escaping
from his planet when Unicron ate it.
{Note: The script says *G*ranix here.  Not my mistake.}

    KRANIX

The world of the savage Sharkticons and their
cruel masters the Quintessons.  They hunt down
those who try to escape the wrath of Unicron,
and put them on trial.

    KUP

But what if they're innocent?

    KRANIX

Guilty or innocent, the sentence is always the
same - death!

    HOT ROD

Unicron?!  Who's Unicron?

    KRANIX

A planet six times the size of this one that
absorbs everything in its path.

    KUP

So that's the monster's name.

    HOT ROD

I wonder if there's any connection between
it and Galvatron.

Suddenly, a Quintesson Guard roars in...

    QUINTESSON GUARD (V.O.)

That one!

All turn and look off, reacting as two Guards thunder in, grab
Granix and pull him back out of the door.
{NOTE: Another instance of the spelling of Granix}

ANOTHER ANGLE - INCLUDING THE LEAD QUINTESSON

as he points at Kup and Hot Rod

    QUINTESSON GUARD

Soon, you too shall receive your sentence.

THEIR POV  - OUT THE WINDOW THE ARENA

Kranix stands on what almost looks like a wide diving board over
a watery (or oily) pit teeming with Sharkticons.

    LEAD QUINTESSON

Jury, have you reached a verdict?

    JUROR #1

We have your honor.

    LEAD QUINTESSON

  (to jury of Quintessons)
Guilty.....Or innocent.  I repeat.

    KRANIX

Spare me this mockery of justice.

    LEAD QUINTESSON

I repeat, guilty...or innocent.

    JURORS

Guilty!!

Jury's faces rotate to fifth expression - a DEATH'S HEAD

ON GRANIX   {NOTE: Yet another, final, reference to Kranix as Granix}

Suddenly, the Robot is dumped into a pit of teeming Sharkticons
and there is a mad frenzy.

In moments, he is no more.

ANGLE ON KUP

He watches grimly through the bars.

    KUP

Not the end I'd wish for, lad.

          DISSOLVE TO:

THE EDGE OF A HUGE, SHADOWY PLANET IN SPACE

as Ultra Magnus' Shuttle is BUFFETED BY WINDS AND STORMS as it
enters the atmosphere of JUNKION.

INT. THE SHUTTLE

as it SHAKES AND RATTLES VIOLENTLY

    DANIEL

Where are we, Springer?

    SPRINGER

The place where everything ends up
after you throw it out.

TIGHT ON BLURR

as he holds up hands and CROSSES fingers.

RESUME ON SPRINGER

Tenses and crouches protectively around Arcee and Daniel as we
see mountains of junk whizz past the window.

    ULTRA MAGNUS

Brace for impact!

ON SHUTTLE - TRACKING

It plummets through the mountains and canyons of junk, narrowly
avoiding crashing, but frequently hitting junk pinnacles or sides
of junk walls, and causing avalanches of junk.

By the time the ship lands, it is nearly indistinguishable from
the junk.

INT. THE SHUTTLE

Everyone is in a jumbled tangle - Ultra Magnus beneath Blurr,
Perceptor upside down and hanging from torn end of stairway,
Arcee crouched over Daniel and Springer with half his body
sticking through the hull

                            SPRINGER

                  (pulling himself free of
                   hull wall)

            Remind me to give the Auto Pilot a raise...

Daniel creeps out from under Arcee and shakes bits of broken
metal and dust off his shoulders

                            DANIEL

            Wow!  That was better'n the Roller
            Coaster at Future World!

                            PERCEPTOR

                    (working scanner, computer
                     device, thoughtfully)
            The composition of this planet seems
            to be a chaotic amalgam of discarded
            ferrous and non-ferrous articulations.

                            ULTRA MAGNUS

                    (baffled)
            How's that?

                            SPRINGER

                    (opening hull door with a
                     RIPPING OF METAL)
            He says the planet's made of junk.

SPRINGER AND PERCEPTOR AT OPEN DOOR

as they look out on landscape of "living" junk

                            SPRINGER

            Yep, this dump is a dump......

ULTRA MAGNUS

as he straps on TOOL BELT

                            ULTRA MAGNUS

            We might be able to salvage this thing.
                    (checks LASER DRILL, turns
                     it on, off)

Ultra Magnus starts for door followed by Blurr who takes up a saw
and tool belt and Perceptor who rolls up Shuttle Plans as Daniel
moves out to join them

                            DANIEL

            Can I help, too?

                            SPRINGER

            It's rough out there, kid.  Stay inside
            and play with crayons or something.

ARCEE

as she steps forward with a smile, a strange GRID LIKE "SUIT" in
her hand

                            ARCEE

            I think Daniel can make himself useful
            with....this!  It used to be Spike's.
                    (holds Grid-like metal frame "suit")

                            DANIEL

            Wow!  Dad's exo-suit.  He told me about
            it but I never saw it.

                            ARCEE

            Here, try it on.

She starts helping him into the exo-suit.

ON DANIEL

as he gets inside the "suit" which fits over his body like a
grid-work metal "cage."

Daniel clips "cage" of Exo-Suit shut and stands up inside the
gridwork which makes him taller and broader.  He moves awkwardly,
barely able to advance a step

                            SPRINGER

            Just think about what you want to
            do before you do it!

DANIEL

brows knitted, thinking.

                            SPRINGER

            Don't fight it Dan-O.

He suddenly starts moving rapidly backwards, then sideways, then
forward, then he starts dancing rapidly, then bounces off
walls...

..spinning upside down, then flips over several times and lands
in a splatter, legs spread, arms this way and that - amused,
startled and unhurt.

                            DANIEL

                    (continuing)
            It's kind of tricky....

He suddenly flips around twice in mid-air then regains his feet
and leans way over against Arcee for support.

She laughs and pats his shoulder

                            ARCEE

            For the first time out, you were great!

ON SPRINGER AT DOOR

as he sends down RAMP and motions to the others curtly

                            SPRINGER

            Show time's over!  We've got work to do!
                    (he starts out)

EXT. THE SHUTTLE

as Springer, Arcee, Daniel et.al. come down the ramp and look
around at the lush "vegetation" of growing junk clumps all around
them and a long vista of junk mountains and spires of weathered
junk-rock.

                            DANIEL (V.O.)

                    (whistles)
            This must be the junk capital of the
            universe!

LONG SHOT- DANIEL AND THE OTHERS

as they start DIGGING for parts to repair the ship, sinister
Junkions begin to emerge from the junk to watch them.  Their
leader, WRECK-GAR, speaks to his fellow Junkions.

                            WRECK-GAR

                    (in guttural, rusty,
                     metallic rumble)
            Stop thief!  No welcome-wagon, "hello stranger!"
            that good coffee flavor

                            OTHER JUNKIONS

            Yeah, or your money back!

Wreck-Gar shows large JUNK GUN with all sorts of razor sharp fins
and rusty little rocket missiles mounted around the howitzer
like barrel

                            WRECK-GAR

            Operators are standing by!

They laugh in guttural, clanking sounds and look out at Springer
and the others who keep working as we

                                                    CUT TO:
EXT.  THE GATE TO THE QUINTESSON PALACE

At first, we see only the face of a sinister Quintesson
gatekeeper, backed up by heavily armed Sharkticons.

                            QUINTESSON

            Greetings, noble strangers.

ANGLE ON THE DINOBOTS

They stand at the gate, looking more like kids showing up at your
door wondering if you can come out and play, than like serious
robots on a serious mission.

                            GRIMLOCK

            Yes, me, Grimlock, noble!
            Me, Grimlock search for friends.

ANGLE ON QUINTESSON AND GRIMLOCK

The Quintesson, showing his friendly face, smiles.

                            QUINTESSON

            And who might they be?

                            GRIMLOCK

            Autobots.  Hot Rod and Kup.

                            QUINTESSON

                    (feigning recognition)
            Oh yes.  A young one and an old one.

                            GRIMLOCK

            Yes.  You know friends.  Where are they?

                            QUINTESSON

            They went down that path.

He points to...

A PATH

It probably isn't lined with primroses, but it should be.

GRIMLOCK

                            GRIMLOCK

            You good friend to Grimlock.  I reward
            you, sometime.

With that, the four Dinobots head towards the "primrose path."

ANGLE ON THE QUINTESSON

His head rotates and he smiles a sinister, evil smile.

EXT. UNICRON

Galvatron stands upon the demonic planet, in an extremely
contorted position.

                            GALVATRON

            Why do you torture me?!

VARIOUS ANGLES ON UNICRON

We have no idea where this godly voice is coming from, but this
place sure is spooky.

                            UNICRON

            You have failed.

                            GALVATRON

            No, Unicron.  Ultra Magnus is dead.

                            UNICRON

            Then where is the matrix?

                            GALVATRON

            Destroyed, with him.

                            UNICRON

            The matrix can not be destroyed.
                    (pause)
            And Ultra Magnus lives on the
            planet of Junk.  Stalk him.  Cut him open!
            And bring the matrix to me.

                                                    DISSOLVE TO:

EXT. THE PRIMROSE PATH

They step along the primrose path, not noticing as sinister
things start to happen all around them.

ANGLE ON A METAL EATING PLANT

This thing looks like a metal version of a "venus fly trap," and
it has a malevolent red eye which lights up.

Swoop walks past it in humanoid mode.

SNAP!

It misses him by an inch.

                            GRIMLOCK

            Me Grimlock, positive Hot Rod and Kup
            close!  Get thump, thump, thump...
                    (taps his head hard)

ANGLE ON THE GROUND - IN FRONT OF SLAG

Suddenly, a section of stones drop away in front of Slag
revealing a spiked pit...

                            SLAG

            Me, Slag say you are full of beryllium balony.

He is just about to fall in when...

ANGLE ON GRIMLOCK AND SLAG

Grimlock, in dino mode, slaps him with his tail, knocking him
away an instant before he steps into the hole...

                            GRIMLOCK

            Me, Grimlock, say you full of cesium salami!

Slag gets up...

                            SLAG

            Beryllium balony!

                            GRIMLOCK

            Argh!

ANGLE ON GRIMLOCK

He is about to pounce on Slag when a massive tree, which is
actually more like a sword, suddenly is spring and arcs
toward him.

The machete like blade strikes the ground, between Grimlock and
Slag narrowly missing them.  He turns and sees the thing
stocking in the ground.

                            GRIMLOCK

            Me, Grimlock think trees here are
            cheap model.

                            SLAG

            Like your head!  (laughs at own joke)

Grimlock jumps on Slag and wrestles him to the ground.

Suddenly, a SQUEAKY, ODDLY CHILDISH VOICE speaks from o.s.

                            SQUEAKY VOICE (WHEELIE)

            Friends find.  Look behind.

                            GRIMLOCK

                    (furious)
            Who say that?

HIS P.O.V. - WHEELIE

WHEELIE is the Wolf Boy of Quintesson - an Autobot who's been
evading the Sharkticons since his parents' ship crashed, killing
everybody else in his party.  He wears a necklace of Sharkticon
teeth, packs a three bladed laser knife and a special SLING which
hurls FIRE STONES.

He fears nothing, especially the Dinobots, and he cockily struts
into the clear...

... walks right up Sludge's tail onto Sludge's back and then
shinnies up his neck and jumps onto...

... Slag's head where he stands eye to eye with Grimlock

                            WHEELIE

            Friends find.  Look behind.  Many Face
            lie.  You fool!  You buy!

GRIMLOCK AND WHEELIE

                            GRIMLOCK

                    (eyes blaze, furious)
            Me, Grimlock, "fool?"

                            WHEELIE

                    (smiling breezily)
            Picture you got.  Now fool you not!
                    (he laughs in a wild,
                     metallic cackle)

Grimlock raises a claw to swipe Wheelie off Slag's head

                            GRIMLOCK

            Me, Grimlock, no like you!

ON WHEELIE

as he scowls and quickly loads FIRESTONE IN SLING and slings it
onto Grimlock's nose where it EXPLODES making Grimlock yowl and
pull back, feeling his reddened nose and speaking through his
nose angrily

                            GRIMLOCK

                    (continuing)
            Doooooooow! Why boy hit by dose?

                            WHEELIE

                    (folds arms across his
                     chest)
            Wheelie say, find friends today!
                    (nods defiantly)

Grimlock and Slag react as we

                                                    CUT TO:

THE QUINTESSON "COURTROOM"

Kup and Hot Rod stand on the platform over the Sharkticon pit.
They are "bound" by restraining bolts.

ANGLE ON THE QUINTESSON JUDGE

                            QUINTESSON JUDGE

            Before we deliver your verdict, would you like to
            beg for your lives?

ANGLE ON KUP AND HOT ROD

Kup turns to Hot Rod.

                            KUP

            Remember when you put me together today?

                            HOT ROD

                    (sarcastic)
            Sure, that's all I got to think about.

                            KUP

            I know what part you forgot.

                            QUINTESSON JUDGE (V.O.)

            Silence or I'll hold you in contempt of this court.

                            HOT ROD

            I have nothing but contempt for this court.

ANGLE ON THE QUINTESSON JUDGES

Suddenly, their heads swivel around to deaths heads.

ON KUP AND HOT ROD

The platform drops away and they tumble...

KUP AND HOT ROD - TRACKING

Suddenly, Kup in double-jointed fashion slips out of the
restraining bolt...

                            KUP

            That doohickey you lost was part of my shoulder socket.
            Watch this, lad... without it, I'm double jointed
            as Houdini.

Then, he transforms to humanoid mode and shoots off Hot Rod's
bolt.

                            HOT ROD

            Wish you'd figured that out a little sooner.

                            KUP

            Better late than never!

ANGLE ON THE SHARKTICON PIT

In full humanoid mode, they land, their weapons drawn.

ANGLE ON ALL

Kup and Hot Rod fire, driving some Sharkticons back.

                            HOT ROD

            They've got more Sharkticons than we have
            photon charges!

Kup transforms to Auto mode.

                            KUP

            Let's hold a demolition derby!

Then, he roars into a bunch of them, slamming a massive stack
into the wall.

ANGLE ON HOT ROD

He transforms, too and does the same thing.

ANGLE ON THE SHARKTICON PIT

As fast as the Autobots can run the miserable things over, new
swarms of them come out.

ANGLE ON KUP AND HOT ROD

They clear out a circle in the center of the pit and transform to
humanoid mode.

                            HOT ROD

            Didn't even bend a fender.

                            KUP

            Yeah, but look.  There are a lot more of
            those cam dinging, grill-crackin' things.

WHAT HE SEES

is a wave of larger, more powerful Sharkticons.

                            HOT ROD

            We can't hold out forever, but we
            can give them one whopper of a repair
            bill.

ANGLE ON THE SHARKTICONS

They charge Kup and Hot Rod

Kup and Hot Rod

fire into them, destroying several, but are....

... Soon overrun.

The Sharkticons crawl all over them, munching on their metal.

SUDDENLY --

                            DINOBOTS (O.S.)

                    (WAR WHOOP)

ANGLE ON THE DINOBOTS

They fly down and land on the pile, transforming into Dinobot
mode.

ASSORTED SHOTS OF DINOBOT CARNAGE

SLUDGE in brontosaurus mode, swats several around with his tail,
while stomping them with his feet.

GRIMLOCK

Lowers his teeth to devour a much smaller Sharkticon, the
Sharkticon bares his teeth, realizes that he's a second stringer,
and scampers away.

                            GRIMLOCK

            Me Grimlock want to munch metal!

Slag barrels into Sharkticons, making a quick shishkebob out of
them, while...

Swoop picks two up with his claws, flies in the air and drops
them on other Sharkticons.

THE SHARKTICONS

suddenly back off and begin transforming (bowing) to the
dinobots.

ANGLE ON ALL

Kup and Hot Rod dig themselves out of a pile of Sharkticon parts.

                            HOT ROD

            I never thought I'd be so happy to see
            those big bozos.

ANGLE ON GRIMLOCK

He turns to Hot Rod.

                            GRIMLOCK

            Me Grimlock no bozo.  Me king!

ANGLE ON QUINTESSON JUDGES

They look down, their angry faces showing.

                            QUINTESSON JUDGE

            Sharkticons!  Execute them.

ANGLE ON GRIMLOCK

He points to the Quintessons...

                            GRIMLOCK

            Me Grimlock say execute them.

THE SHARKTICONS

for a brief instant, don't seem to know what to do.

Then, they charge the Quintessons.

THE CHASE

The Quintessons start to flee, but it's clear that the
Sharkticons, who climb over the stacked bodies of other
Sharkticons, are going to catch them.

                            KUP

            I think the problems on this planet
            will be solved very shortly.

ON HOT ROD

                            HOT ROD

            But what about our problems.  We need a ship.

WHEELIE

                            WHEELIE

            You get a ship if I get a trip.

ANGLE ON HOT ROD

He turns to the little, feral, robot.

                            HOT ROD

            Who are you.

SLAG AND WHEELIE

The dinobot lifts up Wheelie.

                            SLAG

            Him Wheelie, him friend.

HOT ROD

                            HOT ROD

            He'll be mine too, if he can find a Quintesson ship.

ANGLE ON WHEELIE

He points into the distance...

WHAT WE SEE

is the strangest looking corkscrew ship  we've every seen
sticking out of the ground.

                            HOT ROD

            That's a ship?

EXT. THE SECOND MOON OF CYBERTRON

PAN ACROSS an enormous stockpile of weaponry as we hear the
terrible roar we have come to associate with Unicron.

                            SPIKE

            If this doesn't do it, nothing will.

ANGLE ON SPIKE

He sets a timer to 20 seconds.  The L.E.D. clicks down.

BUMBLEBEE

now with a new bumpersticker which is a Unicron with a red circle
and slash through it, looks very fidgety.

                            BUMBLEBEE

            Let's get out of here.

BUMBLEBEE AND SPIKE

They run over to a small space ship as...

... The timer counts down.

THE SPACESHIP

takes off.

ANGLE ON THE SECOND MOON

Now, for the first time, we see what is really going on.  Unicron
looms behind it, about to do the big munch.

ANGLE ON BUMBLEBEE AND SPIKE

They roar away.

ON UNICRON

His mist surrounds the planet...

ON BUMBLEBEE AND SPIKE

They stop their ship in space.

                            BUMBLEBEE

            Five, four, three, two, one...

ON THE SECOND MOON AND UNICRON

BLAMMMOLA!

An incredible display of fireworks goes off, seemingly blowing
Unicron to smithereens.

ON BUMBLEBEE AND SPIKE

They slap palms.

Then, they look up, horrified.

                            BUMBLEBEE

            It isn't even dented.

                            SPIKE

            Let's get out of here!

ON UNICRON

The great Maw opens and we hear a grand cosmic roar!

Suddenly, the smoke and space junk from the explosion are sucked
into his mouth.

ON BUMBLEBEE AND SPIKE

They try to fly away.

                            SPIKE

            We're being sucked into it!

ANGLE ON THEIR SHIP AND UNICRON

Despite the fact that their thrusters are on full power, they are
still sucked into...

UNICRON...

Whose great mouth shuts when he's got the human and the Autobot.

                                                    CUT TO:

DEEP SPACE - THE PLANET JUNKION

ANGLE ON ULTRA MAGNUS' SHUTTLE

as Arcee and Springer work on the ship, while Perceptor watches.

                            PERCEPTOR

            Be sure the fittings are securely welded!

ANGLE ON BLURR

as he uses FLAME JETS FROM FINGER TIPS TO WELD joints where new
"canopy" is fitted

                            BLURR

                    (very fast, as usual)
            Absolutely, positively, definitely...

WIDE SHOT TO INCLUDE DANIEL

as he helps Blurr install a junk part.

                            DANIEL

            This exo-suit is fantastic!
                    (to Blurr)
            Want me to do that?

                            BLURR

            Weld? You? Really? Well, why not? Give
            it a try, but think it through first!

Daniel knits his brow, extends FINGER OF EXO-GLOVE which is part
of exo-suit.

CLOSE ON EXO GLOVE AND DANIEL'S HAND

as hand quivers and his finger shoots out a tiny flame which
sputters, sparks and then goes out like a wet match

RESUME ON BLURR AND DANIEL

                            BLURR

            Practice, practice, practice!

WRECK-GAR AND JUNKIONS IN HIDING

Wreck-Gar starts to motion them to the attack, and the Junkions
ready their weapons.

                            WRECK-GAR

            Forward, avanti, apfel and like, go for
            gusto....
                    (stops as OMINOUS ROAR comes
                     from overhead and he looks
                     up)

HIS P.O.V. - GALVATRON AND HUGE DECEPTICON FORCE

                            WRECK-GAR (V.O.)

            Hang on, this be industrial strength
            We watch...

ULTRA MAGNUS

as he, too, hears and then looks up and sees the Decepticon force

                            ULTRA MAGNUS

            Decepticons!
                    (to Springer)
            We've got to draw them off and then double back
            to the ship!

ANGLE ON CYCLONUS

with Galvatron piloting, races up and launches a particularly
nasty looking missile which streaks INTO SHOT and...

ANGLE ON ULTRA MAGNUS' SHIP

... BLAMMOLA!!!!!!!!!!!!!

Turns it into junk.

Springer FIRES UP at INCOMING JETS, calling to the others

                            SPRINGER

            Cancel that last order.

ON ARCEE, DANIEL, BLURR

as Arcee transforms and moves off in one direction.  Daniel looks
at Blurr who is starting to transform

                            DANIEL

            What do I do?


                            BLURR

            Transform!  You can do...
                    (TRANSFORMATION complete,
                    he blurs off and, in V.O.
                    adds)
            ...it!

Blurr GOES OFF outblurring past HAIL OF LASER FIRE from Ramjet
scorching by overhead

ON DANIEL

as he reacts, looks around, thinks, brows knitting, looking off,
reacting

                            DANIEL

            Transform....

HIS P.O.V.- SCAVENGER

Coming at him from one side, Shrapnel coming from the other side

ON SCAVENGER

as he starts reaching for Daniel

                            SCAVENGER

            Human germ!

ON DANIEL

as his Exo-Suit SUDDENLY TRANSFORMS INTO auto mode and takes off
and drives through...

...SCAVENGER AND SHRAPNEL, knocking them over.

                            DANIEL (V.O.)

            Wooooh!!

GALVATRON

flies up to a ridge in advance of his forces, motioning to them
to split off and follow...

EXT. JUNKION - THE CHASE

BIRD'S EYE VIEW - THE AUTOBOTS

They dash through the maze-like walls of junk, pursued by Sweeps,
who strike them from above...

SWEEP

He lets out a rayblast...

ANGLE ON PERCEPTOR - TRACKING

... Hitting Perceptor and spinning him around...

... Until he stumbles to the ground.

ANGLE ON PERCEPTOR AND ULTRA MAGNUS

...  Perceptor lies on the ground, stunned.

...  Ultra Magnus stops next to him...

                            ULTRA MAGNUS

            Perceptor!

... Suddenly, shots tear into the junk all around them as...

ANGLE ON A SWEEP

ROARS towards them...

ANGLE ON PERCEPTOR

He suddenly transforms to cannon mode and fires!

...  Blowing the sweep to protons.

ON PERCEPTOR

He transforms to humanoid mode.

                            PERCEPTOR

            It appears that my lacerations
            were primarily superficial.

                            ULTRA MAGNUS

            Then move it...

ANGLE ON PERCEPTOR

He takes off.

ULTRA MAGNUS

Stays behind, taking a few shots at...

SWEEPS

which streak over in deadly formations.

ULTRA MAGNUS

He stands and shoots.

                            SPRINGER (O.S.)

            Ultra Magnus!

Ultra Magnus turns to see...

THE OTHER AUTOBOTS

several yards down the junk-lined corridor.

                            PERCEPTOR (O.S.)

            Your estimated survival time is 10 seconds.

ANGLE ON ULTRA MAGNUS

He shoots at the junk walls.

                            ULTRA MAGNUS

            Then use that time to escape!  The Matrix
            was designed for an emergency like this.  I'll
            try to unleash its power.

                            SPRINGER

            But what if it doesn't work.

                            ULTRA MAGNUS

            Until all are one!

THE OTHER AUTOBOTS AND JUNK WALLS

Ultra Magnus' ray hits the walls and they tumble down, separating
him from the other Autobots.

ANGLE ON ULTRA MAGNUS

His back to a wall of fallen junk, he pulls out the matrix.

ANGLE ON GALVATRON IN CYCLONUS

Galvatron pops out of Cyclonus and both transform, to land in
front of Ultra Magnus.

ANGLE ON ULTRA MAGNUS

Struggling to open the leadership matrix.  He puts his hand
inside of it and gets a powerful shock!

He pulls his hand out quickly.

                            ULTRA MAGNUS

            Damn it!  Open it!

ANGLE ON GALVATRON

He laughs.

ON ULTRA MAGNUS

He still struggles.

                            ULTRA MAGNUS

                    (baffled)
            Prime, you said the Matrix would light
            our darkest hour.

ANGLE ON GALVATRON

Four sweeps fly  TOWARD CAMERA in formation.  Galvatron pops out
a communication device from his helmet.

                            GALVATRON

            Sweeps, quarter him!

ANGLE ON THE SWEEPS - TRACKING

Four rope-like rays shoot out of them and...

ON ULTRA MAGNUS

wrap around his arms and legs.

ANGLE ON ULTRA MAGNUS AND THE SWEEPS

His arms and legs caught by the four ropes, he knows he's just
about had it.

He struggles for one last moment, then...

ANGLE ON THE SWEEPS AND ULTRA MAGNUS

Pulling their rays taut, the Sweeps fly in four separate
directions, effectively drawing and quartering the Autobot
leader...

ON ULTRA MAGNUS

As all of his limbs are separated from his body and scattered in
the distance, he SCREAMS IN HORROR.

                            ULTRA MAGNUS

            (SCREAMS IN HORROR)

ANGLE ON THE MATRIX

It tumbles from Ultra Magnus' hands to...

... Galvatron's hands!

ANGLE ON GALVATRON

He holds the Autobot Matrix.

                            GALVATRON

            Unicron, my "master," with this I shall
            make you my slave!

Galvatron gets into Cyclonus and flies off

                                                    DISSOLVE TO:

DANIEL

as he moves out and looks down at Ultra Magnus' remains

                            DANIEL

                    (tearful)
            Ultra Magnus!

ANOTHER ANGLE - BLURR, SPRINGER, ARCEE AND PERCEPTOR

as they move up beside Daniel.

                            BLURR

            Without the Matrix there
            is no hope.  No hope at all!

WRECK-GAR AND AN ARMY OF JUNKIONS

as they are moving in battle array towards the Shuttle.

Junkions are an interesting species.  They ride themselves.  That
is, the Junkions ride transforms of themselves, so that if their
vehicle breaks down, the driver will become the vehicle, and the
vehicle will transform to become the driver.

They are gibbering, singing almost a wild kind of junk-rock,
war-cry song which, like their language, is constructed of bits
and pieces of the museum junk of our culture - a humorous aggressive
song which makes a surreal kind of sense.  "Slice 'em dice 'em...
And that's all folks or your money back..."

ON WRECK-GAR

as he roars into the lead and shows his teeth

                            WRECK-GAR

            Don't look behind door number two, Monty.
            It's time to play End-of-the-line-my
            valentine! Geroni-roni-doo-ron-ron-i-mo!
                    (he charges)

ON SPRINGER AND OUR FRIENDS

as they react

                            SPRINGER

            Get gone!

Springer leads the way and Blurr, Arcee, Daniel and Perceptor

follow and we MOVE TO

A ROAD WARRIOR STYLE CHASE

as Springer and Arcee ride on either side of Daniel and Perceptor

with Blurr bringing up the rear-

- zig zagging back and forth to keep the Junkions from getting

at Daniel.

A JUNKION

roars alongside Springer on his motorcycle and throws out laser
barbed grappling hook, trying to hook Springer.

Springer ducks first pass of hook.

ON JUNKION

as he hurls GRAPPLING HOOK AGAIN

ON SPRINGER

as he catches HOOK BY THE CHAIN AND YANKS IT

THE JUNKION

goes flying off his motorcycle.,,

He transforms into a motorcycle as

The motorcycle transforms into a rider and hops on the new
motorcycle and then...

...turns around to come back.

ON SPRINGER

He looks over, astonished.

                            SPRINGER

            It's not hard to knock 'em down.  It's
            getting them to stay down that's the
            trick.

ON ARCEE

as she fires at a Junkion who is trying to swerve her off the
road knocking him off the motorcycle...

The Junkion looks down at his missing arm, digs around in the junk
for a minute, comes up with another, and then transforms to a
motorcycle.

ANOTHER ANGLE

as Junkion rides over to her, starts belting her with junk sword

                            ARCEE

            They're indestructible!

ON DANIEL

as he skids, stopping his Exo-Suit as he reacts to what's ahead

                            DANIEL

            They're everywhere!

HIS P.O.V. - PILES OF JUNK

as Junkions arise out of every junk pile in sight and, gibbering,
singing their junk-rock battle song, start moving in

ON SPRINGER

as he stops and Arcee, Daniel, Perceptor and Blurr stop around
him.  They close ranks and look out at the Junkions grimly

                            PERCEPTOR

            Perhaps they're not as vicious as they look.

ON WRECK-GAR

as he gnashes his teeth and grins and then BLINKS HIS EYES which
roll to show eyes like ping pong balls.  Wreck-Gar makes blipping
noises as he does this

ON SPRINGER

reacting to Wreck-Gar's noises and eyeball display

                            SPRINGER

                    (to Perceptor)
            Positive thinking gets on my nerves.

Suddenly, all react to sound and wind of passing space cruiser
their P.O.V- HOT ROD, KUP AND DINOBOTS IN CRUISER
as it shoots past and banks, coming back for a closer look

                            SPRINGER (V.O.)

            It can't be....it's.....Hot Rod!  He's alive!

DANIEL

as he looks up at passing Cruiser and waves

                            DANIEL

            And Kup and the Dinobots!  We're saved!

                            PERCEPTOR

            I wouldn't count on that!
                    (indicating Junkions)

HIS P.O.V. - EVEN MORE JUNKIONS ARISING OUT OF THE JUNK HILLS

as Junkions newly risen from Junk look up and point at Cruiser
and make hostile signs toward it, shaking weapons, etc.

INT. THE CRUISER  - MOVING SHOT - VIEW THROUGH CANOPY

Hot Rod and Kup look down on the army of Junkions below
surrounding their friends as they SWOOP BY

                            KUP

            Not since the Crocodillos of Strontero
            have I seen such a sight....

ANOTHER ANGLE GRIMLOCK

as he sticks his face up next to Hot Rod.  Wheelie, riding on
Grimlock's head, slips down to stand on console next to Hot Rod

                            GRIMLOCK

            Maybe they make me king, too!

                            KUP

            Don't hold your breath, your majesty.

WRECK-GAR

as he watches Cruiser descend and start gliding in for a landing

                            WRECK-GAR

            Steady as she goes, mob!  Snoopy visitors
            get mud in the eye bye and bye, and film at five!
                    (gives thumbs up sign, RIDES
                     OFF)

                            JUNKIONS

            Everything must go by midnight!

With a SINGING ROAR of musical, tribal excitement, the Junkions
sweep Springer and our friends along with them, following course
of landing Cruiser to

CRUISER LANDING SITE

Cruiser sets down and Junkions line up with weapons aimed at
rampway as they watch door

ON DOORWAY

as Hot Rod steps out with big smile and hand full of energon
sticks followed by a very wary Kup, and the Dinobots with Wheelie
riding Sludge's neck.

INTERCUT TO SPRINGER, DANIEL, ARCEE ET. AL FOR REACTIONS

ON WRECK-GAR AND OTHER JUNKIONS

as they react to hot Rod's smile, Wreck-Gar trying to mimic that
smile to his followers who laugh

ON HOT ROD

as he steps up beside Kup and gently pushes Kup's rifle aside

                            HOT ROD

                    (aside to Kup, still holding
                     smile)
            Guns aren't exactly friendly.

                            KUP

                    (through his teeth to Hot
                     Rod)
            Neither are they in case you haven't noticed.

                            HOT ROD

                    (sotto)
            What was the Universal greeting again?

WRECK-GAR

growls and slips a SNIPPER, BLOW TORCH CUTTING TOOL out of a
holster and starts toward Hot Rod with it

HOT ROD

                            HOT ROD

                    (big smile)
            Bah weep graaaagnah wheep ni ni bong?

WRECK-GAR AND OTHER JUNKIONS

They look at one another, blink, then beam with smiles

                            WRECK-GAR

            Bah weep graaaagnah wheep ni ni bong?

                            HOT ROD

                    (nodding, smiling)
            Bah weep graaaagnah wheep ni ni bong?
                    (presses energon sticks
                     forward)

As Hot Rod says this...

...Wreck-Gar takes the energon sticks and holds them over his
head and...

...all the Junkions smile and cheer and start chanting the
universal greeting phrase, laughing, clapping their hands and
dancing around, taking Arcee's hand and...

... taking Springer and Perceptor and Daniel out into center

of a square dance type gathering, moving back and forth with them
dancing happily, singing the universal greeting in a melodic,
rhythmic way

                            EVERYBODY

            Bah weep graaaagnah wheep ni ni bong Bah weep
            graaaagnah wheep ni ni bong!  Bah weep graaaagnah
            wheep ni ni bong....

WRECK-GAR

hugs Hot Rod, and Perceptor who winces and tries to enjoy it, and
then hugs Daniel, Wheelie, Arcee, laughing and dancing as SINGING
goes.

ON GRIMLOCK

as he reacts to Wreck-Gar kissing his leg

                            GRIMLOCK

            Yuck! Me Grimlock, not a kisser!  Me,
            Grimlock, a king!

WHEELIE

claps his hands and gleefully makes noises as he hops about,
dancing with Junkions until we CUT TO

WRECK-GAR

as he stands on top of platform and RINGS JUNK BELLS AND SIRENS
getting silence and smiling as he waves hands all around

                            WRECK-GAR

            Have a nice day and please, close cover
            before striking, friends! Amigos, buddies
            and side kicks, Breep drit, aw rootie!
            So say the Junkions!
                    (holds hands over his head)

ANGLE ON HOT ROD

He looks at them, strangely.

                            HOT ROD

            Where did you learn to talk like that?

ANGLE ON WRECK-GAR

He reaches into his body, and about where a heart or some other
organ would be, he pulls out a Watchman.

THE WATCHMAN

On it is a crazy Eddy-type commercial.

                            WRECK-GAR

            We talk T.V.  You talk some T.V.?

KUP

looks around nervously.

                            KUP

            I talk some TV.  And now, Hot Rod for the news.  Don't
            touch that dial.  Void where prohibited.

JUNKIONS cheer wildly while the Dinobots react with uncertainty

RESUME ON WRECK-GAR

as he points off and shouts happily.

                            WRECK-GAR

            By George kimosabes your smashed
            up, blotto friend, soon like brand new
            with ninety day warranty
            all iciban parts and labor is!

HIS P.O.V. - JUNKIONS WITH ULTRA MAGNUS

The Junkions move Ultra Magnus' mangled body through an amazing
assembly line, quickly piecing together his body parts, using
junk when they can't find a part.

Then, they lube him, dust him, spray him and polish him.

Then, Wreck-Gar hits a switch, and Ultra Magnus' eye lights go on.

                            WRECK-GAR

            Happy motoring!  Cock-a-doodle-do!

ON ULTRA MAGNUS

as he steps away from Junkion line of reconstruction and into
group consisting of Hot Rod, Kup and Springer.

                            SPRINGER AND OTHERS

                    (Ad lib jubilation)
            Ultra Magnus!

                            ULTRA MAGNUS

            You're all alive...

                            HOT ROD

            The matrix!

All turn to Ultra Magnus.

                            ULTRA MAGNUS

            It's gone...

                            KUP

            And with it, all hope.

                            HOT ROD

            No...
                    (inspired)
            The matrix will not fail us.

                            ARCEE

            Didn't you hear Ultra Magnus.  We don't
            have it anymore.  Galvatron does.

                            HOT ROD

            Then we've got to trust in ourselves, and
            no matter what they odds, destroy Unicron.

ON WRECK-GAR

His eyes light up.

                            WRECK-GAR

            Yeah!  Destroy Unicron... Kill the grand poobah....
            Flush cosmic troubles down the drain.

ANGLE ON JUNKIONS

                            JUNKIONS

                    (almost chanting)
            Destroy Unicron... Kill the grand poobah...
            Flush cosmic troubles down the drain.

ANGLE ON SPRINGER

The Quintesson ship in the BACKGROUND.

                            SPRINGER

            Listen, I don't want to rain on anybody's
            parade, but how are we going to move
            the army to Unicron.  We don't have enough
            room on that ship.

                            WRECK-GAR

            No fuss, no muss.
                    (to others)
            Hurry, hurry.  Sale must end!  Rush
            right on down to bridge and test drive
            latest with no obligation.

Suddenly, several Junkions scramble to concealed doorways in the
Junk.

                            ULTRA MAGNUS

            You have ships here?

                            WRECK-GAR

            New, improved Junkion planet, is sleek
            sexy import with turbo handling.

                            SPRINGER

            What's he talking about?

ANGLE ON QUINTESSON

Suddenly, boosters fire from the back side of the junk, and
somewhere under all of the junk, we realize is a real space ship.

Maybe the junk is the space ship.

It takes off, bits and pieces of junk flying off as it moves.

                            SPRINGER

            This is what I call traveling in style.

DISSOLVE TO:

LONG SHOT- UNICRON

as Galvatron stands on the surface of Unicron, holding the
Matrix.

                            GALVATRON (V.O.)

            Listen to me, or suffer the consequences.

                            UNICRON

            Aren't we getting pompous?

                            GALVATRON

            I now possess that which you most fear.

Unicron LAUGHS and the force of it rocks the surface of the
planet, knocking Galvatron to his knees.

                            GALVATRON

            You will do my bidding, or...

Unicron roars with laughter.

                            GALVATRON

            ...taste my wrath.

He leans down and starts trying to open the matrix.

ANOTHER ANGLE - FAVORING GALVATRON

IN THE BACKGROUND, we see Cybertron getting closer.

Galvatron struggles with the Matrix, but gets a big shock.

                            UNICRON

            You underestimate me Galvatron.

ANOTHER ANGLE - GALVATRON ON UNICRON

He desperately struggles to open the matrix.

The planet suddenly starts shaking.

Galvatron is bathed in a reddish light, and looks up in horror!

ANGLE ON UNICRON

A hideous transformation is beginning.  The surface of the planet
in front of Galvatron opens up, and we see that the hideous
light comes from eyes set on a hideous head!

GALVATRON AND UNICRON

Galvatron is maybe the size of a single tooth on the horrible
head before him.

                            UNICRON

            For a time, I considered sparing your measly
            little planet, but now you shall witness its
            dismemberment!

ANGLE ON GALVATRON

Suddenly, the ground he stands on drops away, and he falls
through space...

...  Landing on a protruding plate which sticks out of Unicron's
chest.

GALVATRON - CLOSE

He looks around himself in horror and lets out a loud scream as
he realizes the unimaginable horror that surrounds him.

ANGLE ON UNICRON - LONG SHOT

The massive planet transforms, arms and legs fold out of the
enormous body, hands unfold from the arms, jets from it's back
propel it towards...

... Cybertron, which, now looks lonely and vulnerable in space.

ANGLE ON GALVATRON

He stands on a ledge on Unicron and desperately tries to open
the matrix, but no cigar.

                            GALVATRON

            No!!!

ANGLE ON CYBERTRON

Unicron enters shot and grasps at Cybertron with a hideous
claw...

ANGLE ON A TOWER ON CYBERTRON

Shockwave talks into a communications device, as alarms sound and
troopers run everywhere.

                            SHOCKWAVE

            Decepticons...we're under attack...Scramble -

Then his voice is cut off as...

SHOCKWAVE'S POV - OUT HIS WINDOW

Unicron's hand reaches towards the window, squeezes, and the
walls crash in.

SPACE - UNICRON AND CYBERTRON

Unicron tears off the tower and crushes it as...

A FLEET OF DECEPTICON SHIPS

streak out of Cybertron and begin firing on the enormous planet.

Here, we see the true scale of Unicron.  The fighters are the
size of bees as they attack.

ANGLE ON UNICRON

He looks down on the swarm of fighters and...

...Breathes fire down on them.

The fighters POP and burn like popcorn in a blowtorch.

In moments they disappear like sparks from a fire.

ANGLE ON CYBERTRON

Decepticon troopers man a massive gun emplacement as...

... Unicron's huge hand reaches down...

... scraping buildings and...

... tearing out gun emplacements.

ANOTHER ANGLE- UNICRON'S FACE

as he puts his face down so his mouth will receive all the

rockets, laser blasts, etc.

THE DECEPTICON DEFENDERS

are silhouetted like ants in the foreground as Unicron OPENS HIS
MOUTH and swallows the fire barrage

GALVATRON

                            GALVATRON

            Stop feeding him, you fools!

ANGLE ON UNICRON AND CYBERTRON

As yet more Decepticon fighters rip out of the planet, it
looks like Unicron is going to have a field day tearing it apart.

                                                    CUT TO:

EXT. SPACE - SAME TIME

The massive Junkion ship and the corkscrew cruiser piloted by Hot
Rod and Kup race through the dark void.

                            HOT ROD

            I don't believe it.

INT.  THE QUINTESSON SHIP - SAME TIME

Hot Rod, Kup, Springer, Arcee and Daniel as they also look
through canopy, astonished

                            DANIEL

            Wow!

THEIR P.O.V. - UNICRON Destroying CYBERTRON

                            HOT ROD (V.O.)

            Doesn't it remind you of something, Kup?

RESUME ON KUP, DANIEL AND HOT ROD

as they MOVE CLOSER STILL. Kup is glassy eyed.

                            KUP

                    (entranced)
            Nope, never seen anything like it.

                            HOT ROD

            I knew there had to be a first time....
                    (using intercom)
            Battle stations!

LONG SHOT- HOT ROD'S CRUISER AND THE JUNKION SPACE SHIP

as hatches open and the Dinobots start FLYING OUT.

INT. - CRUISER

Hot Rod shoves joystick forward and Cruiser DRIVES TOWARD UNICRON
whom we see turn to take a swat at it through glass canopy

ON JUNKION SPACE SHIP

as it pulls up beside Hot Rod's Cruiser so they are both in a
line.....The Dinobots behind both ships  ...all diving toward
Unicron's nose

INT. JUNKION SHIP - WRECK-GAR AT CONTROLS

As Wreck-Gar also has joystick shoved down and watches Unicron's
face loom closer, closer, closer

LONG SHOT- CRUISER, JUNKION SHIP AND DINOBOTS IN FORMATION

as Unicron smiles and cups both hands together, preparing to
catch the lot of them as soon as they get within reach

UNICRON'S CHEST

Galvatron, the matrix hanging around his neck.  Transforms to
Cannon and fires up at...

...  A bright panel on Unicron's chest...

BLAAAM!

He hits the panel and lights and sparks fly out, causing the
gigantic robot to flicker momentarily.

ANGLE ON UNICRON

The monster lets out a ROAR!

Then, reaches down, picks up Galvatron and drops him into his
mouth like a raisin.

ANGLE ON GALVATRON

He drops into the deep pit of Unicron's mouth, narrowly avoiding
both a torrent of fire, and his sharp, crushing teeth.

EXT. THE SPACE BATTLE - SAME TIME

As they Junkion cruiser comes close, Unicron lets out a burst of
fire...

... Flames lick the ship, but when the fire subsides, nothing has
happened.

                            WRECK-GAR (V.O.)

            Patented enamel resists fire, rain
            and corrosion.  Five year warranty, satisfaction
            guaranteed.

                            OTHER JUNKIONS

            Or your money back!

The ship fires back, dumping rays into...

... Unicron's face, but not really doing any damage.

UNICRON AND JUNKION CRUISER

Unicron grabs the Junkion cruiser with both of it's hands and...

CLOSER

... tears it in half.

                            WRECK-GAR (V.O.)

            Unshakable, unbreakable, unbeatable.
            And for a limited time we include...

INT. CRUSHED JUNKION SHIP

As Ultra Magnus, Perceptor and the others watch in amazement...

                            WRECK-GAR (CONT'D)

            Free bonus surprise!

                            JUNKIONS

            Free bonus surprise!

THE JUNKIONS RUN AROUND

welding things...

...screwing things together...

... and kicking control panels to make them work...

EXT. SPACE

Both halves of the Junkion ship act as independent space ships.

                            PERCEPTOR (V.O.)

            Most unscientific, but... effective.

EXT THE SPACE BATTLE

As the Quintesson ship shoots toward Unicron's face.

THE CRUISER

Is suddenly struck by a ray from Unicron's eye, and half of it
is knocked off.

INT THE CRUISER

Lights go off, and the Autobots are thrown around like toys.

ANGLE THROUGH THE VIEWSCREEN

They are heading right to Unicron's eye.

ANGLE ON UNICRON AND THE CRUISER

Unicron swipes at the cruiser, but misses.

The Cruiser crashes right through Unicron's eye like a corkscrew!

                            UNICRON (V.O.)

            Graaaaaaaaaaa!

INT. UNICRON'S HEAD - SAME TIME

The cruiser rips through the eye socket and smashes through
several electrical membranes that are, in fact, Unicron's brain.

ANGLE ON THE SHIP

As the ship tumbles through, it dumps off the various Autobots
like rubbish and disintegrates.

ANGLE ON HOT ROD

He tumbles out of the rubbish and down a deep pit (which we can
assume is a robotic sinus or something)

EXT. THE BRAIN AREA

Kup, Springer, Daniel and Arcee are scattered about the floor in
the giant, flickering chamber.

                            DANIEL

            Where's Hot Rod?

SPRINGER

Sees something in the distance.

                            SPRINGER

            I don't know, but I hope they didn't get him.

WHAT HE SEES

Are dozens of hovering Robots that look like floating bear
traps, snapping their jaws as they drift slowly towards the
Autobots.

ANGLE ON THE AUTOBOTS

                            KUP

            Debugoids!

                            ARCEE

            Quick!  This way.

They run into a long, cave-like chamber which looks like the
central nervous system or something.

                                                    CUT TO:

INT. ANOTHER CHAMBER - LATER

Hot Rod drops through the darkness and lands in a pile of
miscellaneous junk.

ON HOT ROD

He slowly gets up and looks around the chamber.

WHAT HE SEES

Pan as Hot Rod looks over various different bits of junk, until
he sees the glowing shape of the Autobot Matrix apparently
suspended in mid air.

                            HOT ROD

            The Autobot Matrix!

Then, suddenly two red, burning eyes light up above the matrix,
and we see the hideous form of Galvatron.

                            GALVATRON

            It will do you no good, Autobot.  It
            cannot be opened.

ON HOT ROD

He stands up and walks towards Galvatron.

                            HOT ROD

            Not by a Decepticon.

ANGLE ON HOT ROD AND GALVATRON

Hot Rod steps towards Galvatron.

                            GALVATRON

            It is strange that we should find
            ourselves as allies...

ON GALVATRON

Suddenly, his body is violently twisted, and his arms are almost
broken off.

                            GALVATRON

            Uhhhh...

                            UNICRON

            Destroy him, or feel yourself torn from limb to
            limb.

                            GALVATRON

            Of course, my master!

ANGLE ON GALVATRON AND HOT ROD

Galvatron takes a shot at Hot Rod.

... Hot Rod dives away, as electricity seems to flash
everywhere.

ON GALVATRON

He peers into the gloom.

GALVATRON'S POV  -  PANNING THE ROOM

Hot Rod is nowhere to be seen amidst all of the junk.

ON GALVATRON

Weapon drawn.

                            GALVATRON

            Puny Autobot, you lack even Prime's courage.

There is no response.

                                                    CUT TO:

EXT. SPACE - THE BATTLE

ASSORTED SHOTS

Unicron now stands atop Cybertron, fighting the various ships
that swarm around him like bees.

... Rays streak from his one good eye.

... His hands smash fighters...

... Fire shoots from his mouth.

THE DINOBOTS

Now reaching Unicron's butt, start kicking.

                            GRIMLOCK

            Me Grimlock kick Butt.

ANGLE ON UNICRON

Suddenly; he looks down, sending down a searing blast of fire.

ANGLE ON THE DINOBOTS

They transform to robot mode and fly away.

                            GRIMLOCK

            Me, Grimlock, need new strategy.

                                                    CUT TO:

INT. THE CORRIDOR IN UNICRON -- SAME TIME

Kup, Arcee, Springer and Daniel dash down the corridor.

Suddenly, Daniel's foot is caught in a maze of wiring.

ANGLE ON THE OTHERS

Not noticing, they keep running.

ANGLE ON DANIEL

He tries to pull his foot out.

No luck.

Then, he looks up.

WHAT HE SEES

The Robotic Antibodies are drawing very close to him.

DANIEL

He looks o.s. towards the others.

                            DANIEL

            Help...

ANGLE ON KUP AND ARCEE

They turn around and see Daniel about to be munched by the
antibodies.

                            ARCEE

            Daniel!

ANGLE ON SPRINGER, KUP AND ARCEE

They dash down the corridor firing on...

THE ROBOTIC ANTIBODIES

Their shots hit some, knocking them to scrap, but there are so
many of them, that they can't hold back the tide as it...

ANGLE UNDER THE ANTIBODIES

Daniel, unscathed by the things, which hover over his head,
munching their way towards the Autobots, gets his foot free.

                            DANIEL

            I'm okay.  They don't even see me.

ANGLE ON THE AUTOBOTS

It looks like Custer's last stand as they are surrounded by the
vicious antibodies.

                            KUP

            They must not programmed to
            catch flesh creatures.

                            SPRINGER

            Us, on the other hand...

                            ARCEE

            Daniel... Try to find help!

Arcee fires...

HER SHOT   - TRACKING

Misses the Antibodies, but strikes a large tube.

ANGLE ON THE TUBE

When it is hit, it pours a torrent of liquid which...

... Goes over the swarm of Antibodies, but hits Daniel...

... Carrying him away in a flood of glowing liquid.

ON DANIEL - TRACKING

He shouts as he finds himself in a river of flowing goo.

                                                    CUT TO:

INT.  UNICRON - A FLOWING TUNNEL

Daniel rips through what seem to be endless caves on the torrent
of liquid, until he is dumped down a  high waterfall into...

....  A glowing lake.

... He stays under for a moment, and then bobs up to see...

UNICRON'S STOMACH

This is the central processing area for Unicron's "food" and
"energy."  A long conveyer belt drops junk into a clear, bubbling
vat, where it is separated into raw material and energy.

The energy, which comes out in raw form, goes into a machine and
is crunched into energon cubes, while the solid material, is
separated into it's component metals and plastics, formed into
ingots and sent elsewhere in an assembly line fashion.

DANIEL

watches this with awe until he sees...

ANGLE ON THE ASSEMBLY LINE

... Several Decepticon troopers hanging from cables like shirts
at a dry cleaners are dropped into the bubbling vat, and in
moments converted to nothing...

... Then, Cliffjumper and Jazz roll out of the line...

ON DANIEL

He dashes to the shores of the glowing lake...

                            DANIEL

            Cliffjumper!  Jazz!

And then Spike comes rolling down, followed by Bumblebee!

                            DANIEL

            Bumblebee!  Dad!

ON CLIFFJUMPER, JAZZ, AND SPIKE

They look down, but can't move because they are held by massive
pincers.

                            SPIKE

            Shut off the control, Daniel.

Daniel looks around.

Then, he sees.

A CONTROL

..  which controls the whole thing.

ON DANIEL

He runs up a catwalk towards it....

ANGLE ON DANIEL

He reaches the flickering panel.

                            DANIEL

            What do I do?  It doesn't have any
            buttons or anything.

ANGLE ON SPIKE - TRACKING

He looks down.

                            SPIKE

            Shoot it, Son.

                            DANIEL

            But I don't have a gun.

                            SPIKE

            Use your exo-suit.

ANGLE ON DANIEL

He looks down at his hand and concentrates as hard as he can.

Then, a spark  comes out.

It  grows longer.

ANGLE ON THE MACHINE

Spike and the Autobots are about to go in.

                            CLIFFJUMPER

            Hurry!

DANIEL

Starts frying the command console!

ANGLE ON THE LINE

It keeps moving.

Then, Cliffjumper is dropped in!

ANGLE ON DANIEL

He looks back, and to his horror sees Jazz, Bumblebee and his
father about to be dropped in.

He keeps firing.

The panel starts exploding!

                            DANIEL

            I can't stop it!

ANGLE ON THE ASSEMBLY LINE

Jazz drops in, then Bumblebee, then Spike.

DANIEL

turns around and sees this.

                            DANIEL

            Dad!

There is no answer.

Play the moment.

Then...

                            SPIKE

            Son.

ANGLE ON THE VAT

It is empty.  The Autobots and Spike sit at the bottom, smoking
but alright.


                            SPIKE

            You did it!

                                                    CUT TO:

INT.  THE DARK CAVERN WITH GALVATRON AND HOT ROD

Galvatron, the Matrix at his neck, stalks around the room.
Looking everywhere for Hot Rod.

                            GALVATRON

            Come out, Autobot.  We all must die
            sometime.

Suddenly, shockingly, Hot Rod jumps out of the floor and grabs
Galvatron, sinking his fist into the Decepticon's face.

GALVATRON

stumbles backward.

ANGLE ON GALVATRON AND HOT ROD

Galvatron jumps at Hot Rod...

...  Hot Rod transforms to a car and races away...

ANGLE ON GALVATRON

He transforms to cannon mode and fires...

... Hot Rod transforms to humanoid mode and the shot goes through
his legs.

...   Then, he fires back at Galvatron...

...  Hitting him as he transforms back to humanoid mode and
angering him.

.Raises his gun, then lowers it.

                            GALVATRON

            No, I will crush you with bare hands.

Hot Rod transforms back to car and tries to race away...

...  Galvatron jumps after him and catches him...

...  Hot Rod, nearly pinned by Galvatron transforms to humanoid
mode.

...  Galvatron wrestles him to his back..

... The Adolescent Robot tries to fight back, but the other is
stronger.

... Galvatron puts his hands around Hot Rod's neck and starts
squeezing.

...  We hear the crunching of metal.

                            GALVATRON

            First Prime, then Ultra Magnus and now you.
            It is a pity Autobots die so easily or I might have
            a sense of satisfaction now.

Hot Rod desperately gasps and pulls at Galvatron's hands...

EXT. SPACE - THE BATTLE

Unicron shoots down more Decepticons with his remaining eye,
while he crushes the Junkion ship.

INT. THE JUNKION SHIP

The walls crush in.  The Junkions and the Autobots are  being
smashed together.

                            WRECK-GAR

            Ashes to ashes.  Junk to junk.

INT. THE DARK CAVERN

Galvatron still strangles Hot Rod.

                            HOT ROD

            Gasps.

                            GALVATRON

            Die!

ANOTHER ANGLE

On Hot Rod, his hands, nearly dead, spring to life for a moment
and grasp the Matrix which hangs from Galvatron's chest.

ANGLE ON THE MATRIX

Suddenly, it lights up.

ANOTHER ANGLE

A miraculous transformation takes place.

...  Hot Rod begins to grow at an alarming rate.

...  Age shows on his  face.

...  He is stronger and wiser.

                            OPTIMUS PRIME

            Arise, Rodimus Prime.

                            HOT ROD

            Optimus!

ANGLE ON GALVATRON

He fires at Hot Rod as...

                            GALVATRON

            Nooooooo!

... Hot Rod gets up.

...  The shot doesn't even dent him.

                            HOT ROD

            This is the end of the road, Galvatron.

With that, he picks up the Decepticon and throws him through...

EXT. UNICRON - SAME TIME

... Unicron's side...

                                                    CUT TO:

INT. THE DARK CAVERN

Hot Rod, bathed in the glow of the matrix.  Sticks his hand in
the way we saw Galvatron and Ultra Magnus try earlier.

There is no shock.

Then, like pulling the pin on a hand grenade, he unleashes the
spiritual equivalent of a bomb!

ASSORTED SHOTS -  INVASION OF THE MATRIX

The matrix rips through Unicron's body,  blowing up wires causing
floods and generally causing havoc.

EXT. SPACE - THE BATTLE

Unicron suddenly lets out a scream and lets go of the Junkion
ship, sending it hurtling.

INT. THE JUNKION SHIP

It tumbles through space.

                            AUTOBOTS AND JUNKIONS

            (THEY SCREAM WITH EXHILARATION)

ANGLE ON UNICRON

Suddenly,  he starts tearing into his body.

EXT. SPACE

Unicron writhes in space, tearing himself apart, ripping off a
leg, and sending out sparks like a  roman candle.

                                                    CUT TO:

INT. THE CORRIDOR WHERE KUP ET.AL ARE TRAPPED

They are overrun by the antibodies.

One takes a whopper bite out of Springer's chest.

                            SPRINGER

            I'm almost out of energy.

Suddenly, he looks up and sees one of the creatures explode above
HIM.

Then another explodes, then another.

SPRINGER'S POV - A WALL OF ANTIBODIES

Suddenly, every antibody in the wall begins exploding, and through
the carnage, we see Bumblebee, Spike, Daniel, Cliffjumper and
Jazz.

ANGLE ON THE BATTLE

The last of the antibodies is blown away, and Kup, Arcee and
Springer sit up amidst a pile of antibody bodies.

                            SPRINGER

            That's what I call the nick of time.

ANGLE ON ALL

Suddenly, an entire wall vanishes as Unicron's hand tears at
things.

                            JAZZ

            Let's burn rubber!

ANGLE ON THE TUNNEL

They transform.

The humans jump in.

THE CHASE - TRACKING

They race up the tunnel, one step ahead of Unicron's hand which
shoots after them, pulling apart what we know must be pieces of
his brain...

Then, they reach what seems like a dead end.

In fact, it is the  back side of Unicron's good eye.

The hand comes in after them!

ANGLE DOWN THE CORRIDOR

An unbelievably fast and powerful robot races towards the
Autobots.

When it gets there, we realize that it is Rodimus Prime.

                            KUP

            I knew you had potential, lad!

ANGLE ON RODIMUS PRIME

                            RODIMUS PRIME

            Autobots, transform and roll out.

Rodimus Prime transforms into truck mode as the other Autobots
also transform.  Daniel and Spike jump into him.

Then, in a continuous line, he shoots off, the other Autobots
racing behind him.

                                                    SMASH CUT:

EXT. UNICRON

Rodimus Prime shoots out the second eye...  Followed by the
others.

ANGLE ON UNICRON

An arm and a leg dangle uselessly as the Autobot essence spreads
throughout the body, blowing circuits.

Suddenly, Unicron lets out a loud agonized ROAR.

SPARKS seem to shoot out of every part of his body.

Then, he spins in space like some kind of a fireworks display,
shooting off sparks.

And then...

BANG!

We get the big visual explosion.

DISSOLVE TO:

EXT. SPACE - MUCH LATER

Unicron's head orbits Cybertron.

PAN to Cybertron where and PUSH IN on Rodimus Prime, Arcee,
Kup, Springer, Ultra Magnus, Wreck-Gar, Daniel, Perceptor,
Blaster and Spike watch construction being done on Cybertron
below.

                            RODIMUS PRIME

            Let this mark the end of the
            Cybertronian wars as we move forward to
            a new age of peace and happiness....

                            ALL

            Until all are one!

                            THE END


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
