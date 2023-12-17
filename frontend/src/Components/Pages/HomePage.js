import archerTower from "../../assets/spriteSheets/entityPng/crossbowAlone.png"
import heavyTower from "../../assets/spriteSheets/entityPng/heavyTower.png"
import goblin from "../../assets/spriteSheets/entityPng/S_Goblin.png"
import hobGoblin from "../../assets/spriteSheets/entityPng/S_HobGoblin.png"
import wolf from "../../assets/spriteSheets/entityPng/S_Wolf.png"

const HomePage = () => {
    const main = document.querySelector('main');
    main.innerHTML = renderHomePage()

  };

  function renderHomePage(){    
  
      const innerHtmlHome = `
      <p class="Bestiaire">Bestiary</p>

      <div class = "contenue">
        <div class="card-tower1">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${archerTower}" class="img-fluid rounded-start" alt="..." style = "align-items: center; margin : 40%;">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Ballista</h5>
                <p class="card-text">A colossal war machine standing proudly on the battlefield.
                Its intricate wooden and metal design evokes awe and fear. Load it with various ammunition and release the tension for devastating long-range attacks.
                  Unleash its power strategically to conquer foes and fortifications with unmatched precision and might.</p>
            </div>
          </div>
        </div>
      </div>


        <div class="card-tower2">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${heavyTower}" class="img-fluid rounded-start" alt="..." style = "align-items: center; margin : 40%;" >
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Astral Shard Scepter</h5>
                <p class="card-text"> A mystical artifact imbued with boundless cosmic power.
                Every discharge of the scepter unleashes an explosion of astral energy that literally reduces foes to stardust.
                  However, its slow rate of fire demands unwavering focus and pinpoint accuracy.
                  Each shot is a celestial devastation sequence, to be used judiciously against each target, ensuring no adversary can withstand your astral might.</p>
              </div>
            </div>
          </div>
        </div>

    <div class="mob-div">
      <div class="card-mob1">
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Goblins</h5>
            <p class="card-text">These nimble and sturdy little green beings embody the tenacity of goblins.
             With moderate speed and balanced resistance, they are dependable fighters on the battlefield.
              Their adaptability makes them formidable opponents, capable of maneuvering with agility while enduring blows.
             Underestimating a Goblin would be a grave mistake.</p>
          </div>
        </div>
        <div class="col-md-4">
          <img src="${goblin}" class="img-fluid rounded-start" alt="..." style = "align-items: center; margin : 40%;">
        </div>
      </div>
      </div>


      <div class="card-mob2" >
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Hobgoblins</h5>
            <p class="card-text">A massive, ironclad warrior of the Hobgoblin ranks, the Sentinel is a bastion of unyielding fortitude.
             While their pace may be sluggish, their colossal presence and thick skin make them nearly impervious to harm.
              With a steadfast determination to protect their comrades, Hobgoblins form an indomitable front line.
             They may be slow, but their unwavering defense is a force to be reckoned with.</p>
          </div>
        </div>
        <div class="col-md-4">
          <img src="${hobGoblin}" class="img-fluid rounded-start" alt="..." style = "align-items: center; margin : 40%;">
        </div>
      </div>
      </div>


      <div class="card-mob3" > 
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Wolfs</h5>
            <p class="card-text">A lean and agile predator of the wilderness, the Swift Wolf is a blur of fur and fangs.
              With remarkable speed, it darts across the terrain, closing in on its prey in the blink of an eye.
              However, its slender frame comes at the cost of durability, as it possesses only minimal hit points.
              Engaging a Swift Wolf may be a quick encounter, but underestimate its speed, and it will vanish into the shadows before you know it."</p>

          </div>
        </div>
        <div class="col-md-4">
          <img src="${wolf}" class="img-fluid rounded-start" alt="..." style = "align-items: center; margin : 40%;">
        </div>
      </div>
      </div>`
      
      ;
      return innerHtmlHome
        }




        export default HomePage;