"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ClipLoader } from "react-spinners";
import { BsMoonStarsFill } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const CardConnectionBot = () => {
  const [isloading, setIsLoading] = useState(false);

  return (
    <Card
      className="mt-3 w-full gap-0 p-0.5"
      style={{ background: "linear-gradient(90deg, #3A265E, #4B367C)" }}
    >
      <CardContent className="flex flex-col space-y-4 p-4 sm:flex-row sm:items-center sm:space-x-4">
        <div className="flex flex-row items-center space-x-4 sm:justify-center">
          <Avatar className="ml-4 h-28 w-28 border-2 border-foreground">
            <AvatarImage src={""} />
            <AvatarFallback>
              {/* biome-ignore lint/nursery/noImgElement: React Vite */}
              <Image
                src="/icons/default.png"
                alt="Default Icon"
                width={100}
                height={100}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </AvatarFallback>
          </Avatar>
          <span className="truncate font-bold text-2xl text-foreground">
            test
          </span>
        </div>

        <div className="flex w-full flex-col justify-center">
          {true ? (
            <Button className="mx-auto h-16 w-full cursor-pointer bg-chart-1 font-normal text-foreground text-xl hover:bg-chart-1">
              <span>Desconectar</span>
            </Button>
          ) : (
            <Button
              className="mx-auto h-16 w-xs cursor-pointer bg-chart-1 font-normal text-foreground text-xl hover:bg-chart-1"
              disabled={isloading}
            >
              {isloading ? (
                <div className="flex flex-row items-center justify-center space-x-3">
                  <span className="pl-2">Conectando</span>
                  <ClipLoader
                    color="#ffffff"
                    size={20}
                    className="animate-spin"
                  />
                </div>
              ) : (
                <span>Conectar con Twitch</span>
              )}
            </Button>
          )}
          <span className="pt-2 text-xl">
            Estado:{" "}
            {true ? (
              <span className="text-chart-2">Conectado</span>
            ) : (
              <span className="text-chart-5">Desconectado</span>
            )}
          </span>
        </div>
      </CardContent>
      <div className="relative">
        <BsMoonStarsFill
          className="-right-3 -top-10 -scale-x-100 absolute transform animate-pulse drop-shadow-[5px_0px_10px_rgba(255,255,255,0.5)]"
          size={60}
        />
        <BsMoonStarsFill
          className="-right-3 -top-10 -scale-x-100 absolute transform animate-pulse"
          size={60}
        />
      </div>
    </Card>
  );
};
