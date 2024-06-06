export default function Definitions(){
    return (
      <div className="bg-Seasalt">
        <div className="relative bg-Prussian-Blue text-Seasalt py-16 px-6" style={{ clipPath: 'polygon(0 5%, 50% 0%, 100% 5%, 100% 95%, 50% 100%, 0 95%)' }}>
          <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/3 flex flex-col items-center text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-4">know The Basics</h2>
              <img src="/Assets/basics.svg" alt="Placeholder Image" className="w-48 h-auto mt-4" />
              {/* <h1 className="text-2xl font-bold mb-4">Know The Basics</h1> */}
            </div>
            <div className="lg:w-2/3">
              <div className="space-y-8">
                <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                         <img src="/Assets/item.svg" alt="Bullet points"/>
                    </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">What is a Developer?</h3>
                    <p className="text-Anti-Flash_white">
                      A developer is an individual who assesses challenges and devises solutions—a problem solver, a leader. It's a crucial and almost magical role. Join us, and we'll provide you with all the training to transform into a tech wizard.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                         <img src="/Assets/item.svg" alt="Bullet points"/>
                    </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">What is Programming?</h3>
                    <p className="text-Anti-Flash_white">
                      Programming is the art of crafting code, conjuring magical potions to turn the seemingly impossible into reality. Imagine having a magical wizard on your team, capable of programming and bringing corporate dreams to life. Join us, and you'll acquire the skills to become that wizard.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                         <img src="/Assets/item.svg" alt="Bullet points"/>
                    </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">What is Coding?</h3>
                    <p className="text-Anti-Flash_white">
                      Finally, coding serves as the instruction manual, essentially the book of spells. Despite the buzz around AI and the perception of computers as self-sufficient and intelligent, the reality is that computers still rely on your guidance. Computers communicate in numerous languages, and with us, you'll master them all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
}