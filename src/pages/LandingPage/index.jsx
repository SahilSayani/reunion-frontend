import React from "react";

import { Button, Img, Input, List, Text } from "components";

const LandingPagePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lufga items-center justify-start mx-auto p-[52px] md:px-10 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1350px] mb-14 mx-auto w-full">
          <div className="flex flex-col gap-[31px] items-center justify-start w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <Img className="h-[52px]" src="images/img_logo.svg" alt="logo" />
              <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 gap-[60px] items-center justify-start max-w-[708px] w-full">
                <Text
                  className="text-base text-gray-900 cursor-pointer tracking-[3.20px] uppercase w-auto hover:underline"
                  size="txtLufgaMedium16"
                >
                  Home
                </Text>
                <Text
                  className="text-base cursor-pointer text-gray-900 tracking-[3.20px] uppercase w-auto hover:underline"
                  size="txtLufgaMedium16"
                >
                  Properties
                </Text>
                <Button
                  className="border-2 border-light_blue-400 border-solid cursor-pointer font-semibold min-w-[150px] rounded-[14px] text-base text-center tracking-[3.20px] uppercase hover:shadow-bs"
                  color="white_A700"
                  size="sm"
                >
                  Log in
                </Button>
                <Button
                  className="border-2 border-light_blue-400 border-solid cursor-pointer font-semibold min-w-[150px] rounded-[14px] text-base text-center tracking-[3.20px] uppercase hover:shadow-bs"
                  color="white_A700"
                  size="sm"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <List
              className="flex flex-col gap-7 items-center w-[98%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
                    <Text
                      className="md:text-4xl sm:text-[34px] text-[38px] text-gray-900"
                      size="txtLufgaMedium38"
                    >
                      Recently Added
                    </Text>
                    
                    <Text
                      className="text-2xl md:text-[22px] text-light_blue-400 sm:text-xl"
                      size="txtLufgaMedium24"
                    >
                      See all
                    </Text>
                  </div>
                  <Text
                      className="text-2xl md:text-[22px] text-light_blue-400 sm:text-xl"
                      size="txtLufgaMedium24"
                    >
                      Filters
                    </Text>
                    <div className="flex space-x-40">
                  <div className="relative w-full lg:max-w-sm">
                  
                    <select className="w-48 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-400">
                    <option>Location</option>
                    <option>Carpet Area</option>
                    <option>Price</option>
                    <option>Rooms</option>
                    </select>
                    </div>

                    <div className="relative w-full lg:max-w-sm">
                  
                    <select className="w-48 p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-400">
                    <option>Location</option>
                    <option>Carpet Area</option>
                    <option>Price</option>
                    <option>Rooms</option>
                    </select>
                    </div>
                    </div>
                    
                  <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs shadow-bs hover:w-full w-full">
                      <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[191px] md:h-auto object-cover rounded-[20px]"
                          src="images/img_rectangle7.png"
                          alt="rectangleSeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                            size="txtLufgaSemiBold28"
                          >
                            <>
                              103/143 West Street,
                              <br />
                              Crows Nest
                            </>
                          </Text>
                          <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              10 Bedroom
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              150 M
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              2 Garage
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              Posted by X Builder
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                              shape="round"
                            >
                              $45,545
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                      <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[191px] md:h-auto object-cover rounded-[20px]"
                          src="images/img_rectangle7_191x158.png"
                          alt="rectangleSeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                            size="txtLufgaSemiBold28"
                          >
                            <>
                              103/143 West Street,
                              <br />
                              Crows Nest
                            </>
                          </Text>
                          <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              10 Bedroom
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              150 M
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              2 Garage
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              Posted by X Builder
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                              shape="round"
                            >
                              $45,545
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                      <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[191px] md:h-auto object-cover rounded-[20px]"
                          src="images/img_rectangle7_1.png"
                          alt="rectangleSeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                            size="txtLufgaSemiBold28"
                          >
                            <>
                              103/143 West Street,
                              <br />
                              Crows Nest
                            </>
                          </Text>
                          <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              10 Bedroom
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              150 M
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              2 Garage
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              Posted by X Builder
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                              shape="round"
                            >
                              $45,545
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                      <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[191px] md:h-auto object-cover rounded-[20px]"
                          src="images/img_rectangle7_2.png"
                          alt="rectangleSeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                            size="txtLufgaSemiBold28"
                          >
                            <>
                              103/143 West Street,
                              <br />
                              Crows Nest
                            </>
                          </Text>
                          <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              10 Bedroom
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              150 M
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              2 Garage
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              Posted by X Builder
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                              shape="round"
                            >
                              $45,545
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                      <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[191px] md:h-auto object-cover rounded-[20px]"
                          src="images/img_rectangle7_3.png"
                          alt="rectangleSeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                            size="txtLufgaSemiBold28"
                          >
                            <>
                              103/143 West Street,
                              <br />
                              Crows Nest
                            </>
                          </Text>
                          <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              10 Bedroom
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              150 M
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              2 Garage
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              Posted by X Builder
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                              shape="round"
                            >
                              $45,545
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                      <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                        <Img
                          className="h-[191px] md:h-auto object-cover rounded-[20px]"
                          src="images/img_rectangle7_4.png"
                          alt="rectangleSeven"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                            size="txtLufgaSemiBold28"
                          >
                            <>
                              103/143 West Street,
                              <br />
                              Crows Nest
                            </>
                          </Text>
                          <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              10 Bedroom
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              150 M
                            </Text>
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              2 Garage
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                            <Text
                              className="text-[19px] text-gray-500"
                              size="txtLufgaMedium19"
                            >
                              Posted by X Builder
                            </Text>
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                              shape="round"
                            >
                              $45,545
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs shadow-bs hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                    <Img
                      className="h-[191px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle7.png"
                      alt="rectangleSeven"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                        size="txtLufgaSemiBold28"
                      >
                        <>
                          103/143 West Street,
                          <br />
                          Crows Nest
                        </>
                      </Text>
                      <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          10 Bedroom
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          150 M
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          2 Garage
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          Posted by X Builder
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                          shape="round"
                        >
                          $45,545
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                    <Img
                      className="h-[191px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle7_191x158.png"
                      alt="rectangleSeven"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                        size="txtLufgaSemiBold28"
                      >
                        <>
                          103/143 West Street,
                          <br />
                          Crows Nest
                        </>
                      </Text>
                      <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          10 Bedroom
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          150 M
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          2 Garage
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          Posted by X Builder
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                          shape="round"
                        >
                          $45,545
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                    <Img
                      className="h-[191px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle7_1.png"
                      alt="rectangleSeven"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                        size="txtLufgaSemiBold28"
                      >
                        <>
                          103/143 West Street,
                          <br />
                          Crows Nest
                        </>
                      </Text>
                      <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          10 Bedroom
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          150 M
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          2 Garage
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          Posted by X Builder
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                          shape="round"
                        >
                          $45,545
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border hover:border-0 border-gray-300 border-solid hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[29px] sm:px-5 rounded-[30px] hover:shadow-bs hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row gap-9 items-center justify-between w-[99%] md:w-full">
                    <Img
                      className="h-[191px] md:h-auto object-cover rounded-[20px]"
                      src="images/img_rectangle7_2.png"
                      alt="rectangleSeven"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                        size="txtLufgaSemiBold28"
                      >
                        <>
                          103/143 West Street,
                          <br />
                          Crows Nest
                        </>
                      </Text>
                      <div className="flex flex-row gap-[39px] items-start justify-between mt-[17px] w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          10 Bedroom
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          150 M
                        </Text>
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          2 Garage
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[39px] items-center justify-between mt-7 w-full">
                        <Text
                          className="text-[19px] text-gray-500"
                          size="txtLufgaMedium19"
                        >
                          Posted by X Builder
                        </Text>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[108px] text-[19px] text-center"
                          shape="round"
                        >
                          $45,545
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>                
              </div>
            </List>
          </div>
          <div className="bg-gradient  flex flex-col items-end justify-start mt-[105px] md:pl-10 sm:pl-5 pl-[86px] rounded-[50px] w-full">
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-end w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[85px] w-[39%] md:w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[54px] text-gray-900"
                  size="txtLufgaSemiBold54"
                >
                  <>
                    Find your best
                    <br />
                    Real Estate
                  </>
                </Text>
                <Text
                  className="leading-[36.00px] mt-[33px] text-[22px] text-blue_gray-600 sm:text-lg md:text-xl"
                  size="txtLufgaRegular22"
                >
                  <>
                    We provide a complete service for the sale,
                    <br />
                    purchase or rental of real estate.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-semibold min-w-[213px] mt-[37px] rounded-[14px] text-base text-center tracking-[3.20px] uppercase"
                  color="light_blue_400"
                  size="sm"
                >
                  Contact Us
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[59%] md:w-full">
                <Img
                  className="h-[482px] md:h-auto object-cover rounded-bl-[50px] rounded-br-[50px] rounded-tr-[50px] w-full "
                  src="images/img_simonehutsch8.png"
                  alt="simonehutschEight"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[97px] w-[93%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[85%] md:w-full">
                <Img
                  className="h-[52px]"
                  src="images/img_logo.svg"
                  alt="logo_One"
                />
                
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start md:mt-0 mt-[26px] w-[35%] md:w-full">
                  <Text
                    className="leading-[31.00px] text-gray-500 text-sm w-full"
                    size="txtLufgaRegular14"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <div className="flex flex-row gap-7 items-center justify-start ml-0.5 md:ml-[0] w-[42%] md:w-full">
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_facebookoriginal.svg"
                      alt="facebookorigina"
                    />
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_twitteroriginal.svg"
                      alt="twitteroriginal"
                    />
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_instagramoriginal.svg"
                      alt="instagramorigin"
                    />
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_linkedin.svg"
                      alt="linkedin"
                    />
                  </div>
                  <Text
                    className="text-[13px] text-gray-500"
                    size="txtLufgaRegular13"
                  >
                    © 2021 . All rights reserved.
                  </Text>
                </div>
                
                <Text
                  className="leading-[52.00px] md:ml-[0] ml-[300px] text-gray-900 text-lg"
                  size="txtLufgaRegular18"
                >
                  <>
                    About Us
                    <br />
                    Agents
                    <br />
                    Blog
                    <br />
                    Media
                    <br />
                    Contact Us
                  </>
                </Text>
                <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start mb-[125px] md:ml-[0] ml-[108px] md:mt-0 mt-[13px] w-[24%] md:w-full">
                  <Text
                    className="leading-[23.00px] text-gray-500 text-sm w-[93%] sm:w-full"
                    size="txtLufgaRegular14"
                  >
                    Subscribe to get latest property, blog news from us
                  </Text>
                  <Input
                    name="groupSeven"
                    placeholder="Email Address"
                    className="p-0 placeholder:text-gray-500 text-left text-sm w-full"
                    wrapClassName="border-2 border-blue_gray-100 border-solid flex w-full"
                    type="email"
                    suffix={
                      <div className="h-[34px] ml-[35px] pl-3 pr-[11px] w-[34px] bg-light_blue-400 rounded-[50%] py-[11px]">
                        <Img
                          className="my-auto"
                          src="images/img_arrowright.svg"
                          alt="arrow_right"
                        />
                      </div>
                    }
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
