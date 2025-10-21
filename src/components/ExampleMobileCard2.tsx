export default function ExampleMobileCard2() {
  return (
    <div className="bg-white flex flex-col items-start relative w-full h-full overflow-y-auto">
      {/* Safe area spacing for dynamic island */}
      <div className="sticky top-0 z-10 h-[54px] w-full shrink-0" />
      
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-10 flex flex-col items-start w-full bg-white shrink-0">
        {/* Search Bar Container */}
        <div className="flex flex-col gap-[10px] h-[72px] items-center justify-center w-full">
          <div className="bg-white box-border flex flex-col gap-[10px] h-[52px] items-start justify-center px-[18px] py-[14px] rounded-[44px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.16)] w-[361px]">
            <div className="flex gap-[22px] items-center w-[338px]">
              <div className="box-border flex gap-[10px] items-center overflow-clip px-[3px] py-0 w-[272px]">
                <p className="font-normal text-[16px] leading-[22px] text-[#858995] w-[207px]">
                  Find places and things to do
                </p>
              </div>
              <div className="flex h-[41px] items-center justify-center w-[42px]">
                <div className="bg-[#0071eb] border-2 border-[#0071eb] border-solid box-border flex grow items-center h-full rounded-[1000px]">
                  <div className="box-border flex grow items-center justify-center min-h-[36px] px-[7px] py-[8px]">
                    <div className="relative w-[22px] h-[22px]">
                      <div className="absolute inset-[8.33%_6.61%_8.33%_8.33%]">
                        <img alt="" className="block max-w-none w-full h-full" src="/5b71110c5631769317ad1ed6ab1f07c51837242e.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters - Horizontally Scrollable */}
        <div className="box-border flex gap-[6px] h-[57px] items-center px-[11px] py-0 w-full overflow-x-auto">
          {/* All destinations - Selected */}
          <div className="box-border flex gap-0 items-center min-h-[44px] min-w-[44px] p-0 rounded-[1000px] shrink-0">
            <div className="bg-[#1a2b49] box-border flex gap-[4px] items-center pl-[16px] pr-[12px] py-[8px] rounded-[1000px]">
              <p className="font-normal text-[14px] leading-[20px] text-white whitespace-nowrap">
                All destinations
              </p>
              <div className="overflow-clip relative w-[16px] h-[16px]">
                <div className="absolute inset-[31.06%_18.56%_30.87%_18.56%]">
                  <img alt="" className="block max-w-none w-full h-full" src="/997f0d7caa5bd80f02c5613e1530d188c7fc6f12.svg" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Categories */}
          <div className="box-border flex gap-[4px] items-center min-h-[44px] min-w-[44px] p-0 rounded-[1000px] shrink-0">
            <div className="bg-[#ebeef1] box-border flex gap-[4px] items-center px-[16px] py-[8px] rounded-[1000px]">
              <p className="font-normal text-[14px] leading-[20px] text-[#1a2b49] whitespace-nowrap">
                Categories
              </p>
            </div>
          </div>
          
          {/* Interests */}
          <div className="box-border flex gap-[4px] items-center min-h-[44px] min-w-[44px] p-0 rounded-[1000px] shrink-0">
            <div className="bg-[#ebeef1] box-border flex gap-[4px] items-center px-[16px] py-[8px] rounded-[1000px]">
              <p className="font-normal text-[14px] leading-[20px] text-[#1a2b49] whitespace-nowrap">
                Interests
              </p>
            </div>
          </div>
          
          {/* Price */}
          <div className="box-border flex gap-[4px] items-center min-h-[44px] min-w-[44px] p-0 rounded-[1000px] shrink-0">
            <div className="bg-[#ebeef1] box-border flex gap-[4px] items-center px-[16px] py-[8px] rounded-[1000px]">
              <p className="font-normal text-[14px] leading-[20px] text-[#1a2b49] whitespace-nowrap">
                Price
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Activities List - Scrollable */}
      <div className="bg-white flex flex-col gap-[13px] items-start w-full pb-6">
        {/* Activity Card 1 - Highlighted */}
        <div className="bg-[#e1f0ff] box-border flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] w-full">
          <div className="flex gap-[12px] items-center w-full">
            <div className="flex flex-col items-end overflow-clip relative rounded-[8px] w-[120px]">
              <div className="box-border flex gap-0 items-center justify-center overflow-clip p-0 rounded-[8px] w-full relative">
                <img alt="Cat Museum Budapest" className="w-full h-[120px] object-cover rounded-[8px]" src="/2af0736498e0d127b00390185208b57568c10594.png" />
              </div>
              <div className="absolute box-border flex gap-0 items-start justify-end left-0 pl-[8px] pr-0 py-0 right-0 top-0">
                <div className="flex flex-col items-start relative">
                  <div className="relative w-[44px] h-[44px]">
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="rotate-180 scale-y-[-100%] w-[44px] h-[44px]">
                        <div className="box-border flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[22px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.16)] w-full h-full">
                          <div className="bg-white flex items-center justify-center relative rounded-[1000px]">
                            <div className="box-border flex items-center justify-center p-[10px] relative rounded-[18px]">
                              <div className="relative w-[16px] h-[16px]">
                                <div className="absolute inset-[12.5%_8.33%_8.45%_8.33%]">
                                  <img alt="" className="block max-w-none w-full h-full" src="/922f665fefb0db11f3c7b7ef145269ee7b9e3c06.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col gap-[8px] items-start p-0">
              <div className="box-border flex flex-col gap-[8px] items-start p-0 w-full">
                <div className="box-border flex flex-col gap-[4px] items-start p-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative text-[18px] text-[#1a2b49]">
                    <p className="leading-[24px]">Cat Museum Budapest Entry Ticket</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-[4px] items-center p-0 w-full">
                <div className="box-border flex gap-[4px] items-center p-0">
                  <div className="box-border flex gap-0 items-center overflow-clip p-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-[16px] h-[16px]">
                        <div className="absolute inset-[8.33%_8.33%_10.42%_8.33%]">
                          <img alt="" className="block max-w-none w-full h-full" src="/59633f34495ec7c10ea70ed9fcac54d20eb5cef7.svg" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[0] relative text-[14px] text-[#1a2b49]">
                    <p className="leading-[20px] whitespace-pre">4.3</p>
                  </div>
                </div>
                <div className="flex font-normal items-start leading-[0] relative text-[14px] text-[#63687a]">
                  <div className="flex flex-col justify-center relative">
                    <p className="leading-[20px] whitespace-pre">(1,844)</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-0 items-center p-0 w-[157px]">
                <div className="flex-1 flex flex-col font-normal justify-center leading-[0] relative text-[0px] text-[#1a2b49]">
                  <p>
                    <span className="leading-[18px] text-[14px]">From </span>
                    <span className="font-medium leading-[20px] text-[16px]">€34</span>
                    <span className="leading-[18px] text-[14px]"> per person</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Card 2 */}
        <div className="bg-white box-border flex flex-col gap-[8px] items-start overflow-clip p-[8px] rounded-[8px] w-full">
          <div className="flex gap-[12px] items-start w-full">
            <div className="flex flex-col items-end overflow-clip relative rounded-[8px] w-[120px]">
              <div className="box-border flex gap-0 items-center justify-center overflow-clip p-0 rounded-[8px] w-full relative">
                <img alt="Benagil Tour" className="w-full h-[120px] object-cover rounded-[8px]" src="/726b73c626ea3b9914fc64ac4228b9520b959f3d.png" />
              </div>
              <div className="absolute box-border flex gap-0 items-start justify-end left-0 pl-[8px] pr-0 py-0 right-0 top-0">
                <div className="flex flex-col items-start relative">
                  <div className="relative w-[44px] h-[44px]">
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="rotate-180 scale-y-[-100%] w-[44px] h-[44px]">
                        <div className="box-border flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[22px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.16)] w-full h-full">
                          <div className="bg-white flex items-center justify-center relative rounded-[1000px]">
                            <div className="box-border flex items-center justify-center p-[10px] relative rounded-[18px]">
                              <div className="relative w-[16px] h-[16px]">
                                <div className="absolute inset-[12.5%_8.33%_8.45%_8.33%]">
                                  <img alt="" className="block max-w-none w-full h-full" src="/922f665fefb0db11f3c7b7ef145269ee7b9e3c06.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col gap-[8px] items-start p-0">
              <div className="box-border flex flex-col gap-[8px] items-start p-0 w-full">
                <div className="box-border flex flex-col gap-[4px] items-start p-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative text-[18px] text-[#1a2b49]">
                    <p className="leading-[24px]">Benagil: Caves, Beaches, and Secret Spots Guided Kayak Tour</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-[4px] items-center p-0 w-full">
                <div className="box-border flex gap-[4px] items-center p-0">
                  <div className="box-border flex gap-0 items-center overflow-clip p-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-[16px] h-[16px]">
                        <div className="absolute inset-[8.33%_8.33%_10.42%_8.33%]">
                          <img alt="" className="block max-w-none w-full h-full" src="/59633f34495ec7c10ea70ed9fcac54d20eb5cef7.svg" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[0] relative text-[14px] text-[#1a2b49]">
                    <p className="leading-[20px] whitespace-pre">4.8</p>
                  </div>
                </div>
                <div className="flex font-normal items-start leading-[0] relative text-[14px] text-[#63687a]">
                  <div className="flex flex-col justify-center relative">
                    <p className="leading-[20px] whitespace-pre">(2,592)</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex flex-col font-normal gap-0 items-start justify-center p-0 w-[157px]">
                <p className="decoration-solid leading-[18px] line-through relative text-[14px] text-[#63687a] w-full">From € 30.50 </p>
                <div className="flex flex-col justify-center leading-[0] relative text-[0px] text-[#1a2b49] w-full">
                  <p>
                    <span className="leading-[18px] text-[14px]">From </span>
                    <span className="font-medium leading-[20px] text-[16px]">€31</span>
                    <span className="leading-[18px] text-[14px]"> per person</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Card 3 */}
        <div className="bg-white box-border flex flex-col gap-[8px] items-start overflow-clip p-[8px] rounded-[8px] w-full">
          <div className="flex gap-[12px] items-start w-full">
            <div className="flex flex-col items-end overflow-clip relative rounded-[8px] w-[120px]">
              <div className="box-border flex gap-0 items-center justify-center overflow-clip p-0 rounded-[8px] w-full relative">
                <img alt="Split Kayaking Tour" className="w-full h-[120px] object-cover rounded-[8px]" src="/2b28786301dab1f672d1ee2be53baaa1284a4505.png" />
              </div>
              <div className="absolute box-border flex gap-0 items-start justify-end left-0 pl-[8px] pr-0 py-0 right-0 top-0">
                <div className="flex flex-col items-start relative">
                  <div className="relative w-[44px] h-[44px]">
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="rotate-180 scale-y-[-100%] w-[44px] h-[44px]">
                        <div className="box-border flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[22px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.16)] w-full h-full">
                          <div className="bg-white flex items-center justify-center relative rounded-[1000px]">
                            <div className="box-border flex items-center justify-center p-[10px] relative rounded-[18px]">
                              <div className="relative w-[16px] h-[16px]">
                                <div className="absolute inset-[12.5%_8.33%_8.45%_8.33%]">
                                  <img alt="" className="block max-w-none w-full h-full" src="/922f665fefb0db11f3c7b7ef145269ee7b9e3c06.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col gap-[8px] items-start p-0">
              <div className="box-border flex flex-col gap-[8px] items-start p-0 w-full">
                <div className="box-border flex flex-col gap-[4px] items-start p-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative text-[18px] text-[#1a2b49]">
                    <p className="leading-[24px]">Split: Illuminated Evening Guided Kayaking Tour</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-[4px] items-center p-0 w-full">
                <div className="box-border flex gap-[4px] items-center p-0">
                  <div className="box-border flex gap-0 items-center overflow-clip p-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-[16px] h-[16px]">
                        <div className="absolute inset-[8.33%_8.33%_10.42%_8.33%]">
                          <img alt="" className="block max-w-none w-full h-full" src="/59633f34495ec7c10ea70ed9fcac54d20eb5cef7.svg" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[0] relative text-[14px] text-[#1a2b49]">
                    <p className="leading-[20px] whitespace-pre">4.2</p>
                  </div>
                </div>
                <div className="flex font-normal items-start leading-[0] relative text-[14px] text-[#63687a]">
                  <div className="flex flex-col justify-center relative">
                    <p className="leading-[20px] whitespace-pre">(45097)</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-0 items-center p-0 w-[157px]">
                <div className="flex-1 flex flex-col font-normal justify-center leading-[0] relative text-[0px] text-[#1a2b49]">
                  <p>
                    <span className="leading-[18px] text-[14px]">From </span>
                    <span className="font-medium leading-[20px] text-[16px]">€43</span>
                    <span className="leading-[18px] text-[14px]"> per person</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Card 4 */}
        <div className="bg-white box-border flex flex-col gap-[8px] items-start overflow-clip p-[8px] rounded-[8px] w-full">
          <div className="flex gap-[12px] items-start w-full">
            <div className="flex flex-col items-end overflow-clip relative rounded-[8px] w-[120px]">
              <div className="box-border flex gap-0 items-center justify-center overflow-clip p-0 rounded-[8px] w-full relative">
                <img alt="Benagil Cave Cruise" className="w-full h-[120px] object-cover rounded-[8px]" src="/b2b35c5343fec32e8f35b8b35f02915689a8173e.png" />
              </div>
              <div className="absolute box-border flex gap-0 items-start justify-end left-0 pl-[8px] pr-0 py-0 right-0 top-0">
                <div className="flex flex-col items-start relative">
                  <div className="relative w-[44px] h-[44px]">
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="rotate-180 scale-y-[-100%] w-[44px] h-[44px]">
                        <div className="box-border flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[22px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.16)] w-full h-full">
                          <div className="bg-white flex items-center justify-center relative rounded-[1000px]">
                            <div className="box-border flex items-center justify-center p-[10px] relative rounded-[18px]">
                              <div className="relative w-[16px] h-[16px]">
                                <div className="absolute inset-[12.5%_8.33%_8.45%_8.33%]">
                                  <img alt="" className="block max-w-none w-full h-full" src="/922f665fefb0db11f3c7b7ef145269ee7b9e3c06.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col gap-[8px] items-start p-0">
              <div className="box-border flex flex-col gap-[8px] items-start p-0 w-full">
                <div className="box-border flex flex-col gap-[4px] items-start p-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative text-[18px] text-[#1a2b49]">
                    <p className="leading-[24px]">Portimão: Sunset Cruise to Benagil Cave</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-[4px] items-center p-0 w-full">
                <div className="box-border flex gap-[4px] items-center p-0">
                  <div className="box-border flex gap-0 items-center overflow-clip p-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-[16px] h-[16px]">
                        <div className="absolute inset-[8.33%_8.33%_10.42%_8.33%]">
                          <img alt="" className="block max-w-none w-full h-full" src="/59633f34495ec7c10ea70ed9fcac54d20eb5cef7.svg" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[0] relative text-[14px] text-[#1a2b49]">
                    <p className="leading-[20px] whitespace-pre">4.2</p>
                  </div>
                </div>
                <div className="flex font-normal items-start leading-[0] relative text-[14px] text-[#63687a]">
                  <div className="flex flex-col justify-center relative">
                    <p className="leading-[20px] whitespace-pre">(45097)</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex flex-col font-normal gap-0 items-start justify-center p-0 w-[157px]">
                <p className="decoration-solid leading-[18px] line-through relative text-[14px] text-[#63687a] w-full">From € 30.50 </p>
                <div className="flex flex-col justify-center leading-[0] relative text-[0px] text-[#1a2b49] w-full">
                  <p>
                    <span className="leading-[18px] text-[14px]">From </span>
                    <span className="font-medium leading-[20px] text-[16px]">€20</span>
                    <span className="leading-[18px] text-[14px]"> per person</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Card 5 */}
        <div className="bg-white box-border flex flex-col gap-[8px] items-start overflow-clip p-[8px] rounded-[8px] w-full">
          <div className="flex gap-[12px] items-start w-full">
            <div className="flex flex-col items-end overflow-clip relative rounded-[8px] w-[120px]">
              <div className="box-border flex gap-0 items-center justify-center overflow-clip p-0 rounded-[8px] w-full relative">
                <img alt="Quinta da Regaleira" className="w-full h-[120px] object-cover rounded-[8px]" src="/f37851df1aa132c46d28c4427b4891cc45cd737c.png" />
              </div>
              <div className="absolute box-border flex gap-0 items-start justify-end left-0 pl-[8px] pr-0 py-0 right-0 top-0">
                <div className="flex flex-col items-start relative">
                  <div className="relative w-[44px] h-[44px]">
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="rotate-180 scale-y-[-100%] w-[44px] h-[44px]">
                        <div className="box-border flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[22px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.16)] w-full h-full">
                          <div className="bg-white flex items-center justify-center relative rounded-[1000px]">
                            <div className="box-border flex items-center justify-center p-[10px] relative rounded-[18px]">
                              <div className="relative w-[16px] h-[16px]">
                                <div className="absolute inset-[12.5%_8.33%_8.45%_8.33%]">
                                  <img alt="" className="block max-w-none w-full h-full" src="/922f665fefb0db11f3c7b7ef145269ee7b9e3c06.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col gap-[8px] items-start p-0">
              <div className="box-border flex flex-col gap-[8px] items-start p-0 w-full">
                <div className="box-border flex flex-col gap-[4px] items-start p-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative text-[18px] text-[#1a2b49]">
                    <p className="leading-[24px]">Quinta da Regaleira Skip-the-Ticket-Line Entry & Audioguide</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-[4px] items-center p-0 w-full">
                <div className="box-border flex gap-[4px] items-center p-0">
                  <div className="box-border flex gap-0 items-center overflow-clip p-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-[16px] h-[16px]">
                        <div className="absolute inset-[8.33%_8.33%_10.42%_8.33%]">
                          <img alt="" className="block max-w-none w-full h-full" src="/59633f34495ec7c10ea70ed9fcac54d20eb5cef7.svg" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[0] relative text-[14px] text-[#1a2b49]">
                    <p className="leading-[20px] whitespace-pre">4.2</p>
                  </div>
                </div>
                <div className="flex font-normal items-start leading-[0] relative text-[14px] text-[#63687a]">
                  <div className="flex flex-col justify-center relative">
                    <p className="leading-[20px] whitespace-pre">(45097)</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-0 items-center p-0 w-[157px]">
                <div className="flex-1 flex flex-col font-normal justify-center leading-[0] relative text-[0px] text-[#1a2b49]">
                  <p>
                    <span className="leading-[18px] text-[14px]">From </span>
                    <span className="font-medium leading-[20px] text-[16px]">€21</span>
                    <span className="leading-[18px] text-[14px]"> per person</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Card 6 */}
        <div className="bg-white box-border flex flex-col gap-[8px] items-start overflow-clip p-[8px] rounded-[8px] w-full">
          <div className="flex gap-[12px] items-start w-full">
            <div className="flex flex-col items-end overflow-clip relative rounded-[8px] w-[120px]">
              <div className="box-border flex gap-0 items-center justify-center overflow-clip p-0 rounded-[8px] w-full relative">
                <img alt="Turtle Snorkeling" className="w-full h-[120px] object-cover rounded-[8px]" src="/c6010309094e687562e0a9e49b69b97841d678b0.png" />
              </div>
              <div className="absolute box-border flex gap-0 items-start justify-end left-0 pl-[8px] pr-0 py-0 right-0 top-0">
                <div className="flex flex-col items-start relative">
                  <div className="relative w-[44px] h-[44px]">
                    <div className="absolute flex inset-0 items-center justify-center">
                      <div className="rotate-180 scale-y-[-100%] w-[44px] h-[44px]">
                        <div className="box-border flex flex-col gap-[10px] items-center justify-center overflow-clip relative rounded-[22px] shadow-[0px_0px_32px_0px_rgba(0,0,0,0.06),0px_4px_8px_0px_rgba(0,0,0,0.16)] w-full h-full">
                          <div className="bg-white flex items-center justify-center relative rounded-[1000px]">
                            <div className="box-border flex items-center justify-center p-[10px] relative rounded-[18px]">
                              <div className="relative w-[16px] h-[16px]">
                                <div className="absolute inset-[12.5%_8.33%_8.45%_8.33%]">
                                  <img alt="" className="block max-w-none w-full h-full" src="/922f665fefb0db11f3c7b7ef145269ee7b9e3c06.svg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 box-border flex flex-col gap-[8px] items-start p-0">
              <div className="box-border flex flex-col gap-[8px] items-start p-0 w-full">
                <div className="box-border flex flex-col gap-[4px] items-start p-0 w-full">
                  <div className="flex flex-col font-bold justify-center leading-[0] min-w-full relative text-[18px] text-[#1a2b49]">
                    <p className="leading-[24px]">Paphos: Turtle-Watching Snorkeling Sea Scooter Trip</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-[4px] items-center p-0 w-full">
                <div className="box-border flex gap-[4px] items-center p-0">
                  <div className="box-border flex gap-0 items-center overflow-clip p-0">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative w-[16px] h-[16px]">
                        <div className="absolute inset-[8.33%_8.33%_10.42%_8.33%]">
                          <img alt="" className="block max-w-none w-full h-full" src="/59633f34495ec7c10ea70ed9fcac54d20eb5cef7.svg" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col font-normal justify-center leading-[0] relative text-[14px] text-[#1a2b49]">
                    <p className="leading-[20px] whitespace-pre">4.2</p>
                  </div>
                </div>
                <div className="flex font-normal items-start leading-[0] relative text-[14px] text-[#63687a]">
                  <div className="flex flex-col justify-center relative">
                    <p className="leading-[20px] whitespace-pre">(45097)</p>
                  </div>
                </div>
              </div>
              <div className="box-border flex gap-0 items-center p-0 w-[157px]">
                <div className="flex-1 flex flex-col font-normal justify-center leading-[0] relative text-[0px] text-[#1a2b49]">
                  <p>
                    <span className="leading-[18px] text-[14px]">From </span>
                    <span className="font-medium leading-[20px] text-[16px]">€60</span>
                    <span className="leading-[18px] text-[14px]"> per person</span>
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

