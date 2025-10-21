"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useState, useEffect } from "react";

// Card data interface
interface CardData {
  id: number;
  image: string;
  title: string;
  duration: string;
  priceFrom: string;
  priceAmount: string;
  pricePer: string;
  rating: string;
  reviewCount: string;
  hasBookButton: boolean;
}

// Example card data
const cardData: CardData[] = [
  {
    id: 1,
    image: "/0a8f1f4382491621e38bf565c13415584ff7426a.png",
    title: "Cat Museum Budapest Entry Ticket",
    duration: "2 - 3.5 hours • Skip the line",
    priceFrom: "From",
    priceAmount: "€34",
    pricePer: "per person",
    rating: "4.2",
    reviewCount: "(45k)",
    hasBookButton: true,
  },
  {
    id: 2,
    image: "/0c6a066831bbf138b10c557c6a900024aa67729a.png",
    title: "Historic Walking Tour of Budapest",
    duration: "3 hours • Guided tour",
    priceFrom: "From",
    priceAmount: "€28",
    pricePer: "per person",
    rating: "4.5",
    reviewCount: "(32k)",
    hasBookButton: true,
  },
  {
    id: 3,
    image: "/0d68ad7558ec19b1625c7c84a7b4ef53079e50fb.png",
    title: "Thermal Bath Experience",
    duration: "4 hours • Skip the line",
    priceFrom: "From",
    priceAmount: "€42",
    pricePer: "per person",
    rating: "4.7",
    reviewCount: "(28k)",
    hasBookButton: true,
  },
];

// Card Component
interface CardLargeProps {
  data: CardData;
  isActive: boolean;
}

function CardLarge({ data, isActive }: CardLargeProps) {
  return (
    <div className="bg-white border border-[#ebeef1] border-solid flex flex-col items-start p-2 rounded-2xl shrink-0 w-[312px] min-h-[380px]">
      {/* Image section */}
      <div className="w-full h-[269px] relative rounded-[10px] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        {/* Heart button overlay */}
        <div className="absolute right-[11px] top-[11px] w-11 h-11">
          <div className="bg-white border-2 border-white rounded-full w-full h-full flex items-center justify-center">
            <img
              src="/b632f573e12b7be6a6876619037a31872bea4bcc.svg"
              alt="Favorite"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="w-full flex flex-col gap-[5px] p-2">
        {/* Title */}
        <h3 className="text-base font-medium text-black leading-[22px]">
          {data.title}
        </h3>

        {/* Duration and features */}
        <p className="text-sm text-[#1a2b49] leading-[18px]">
          {data.duration}
        </p>

        {/* Price and rating */}
        <div className="flex items-center gap-2 w-full">
          {/* Price */}
          <div className="flex items-baseline gap-1 whitespace-nowrap">
            <span className="text-xs text-[#63687a] leading-[16px]">
              {data.priceFrom}
            </span>
            <span className="text-xl font-medium text-[#1a2b49] leading-[22px]">
              {data.priceAmount}
            </span>
            <span className="text-xs text-[#63687a] leading-[16px]">
              {data.pricePer}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 ml-auto">
            <div className="w-5 h-5 flex items-center justify-center">
              <img
                src="/a68b28041daa3b5eaab56e8e2976a0ecadd82b7f.svg"
                alt="Star"
                className="w-4 h-4"
              />
            </div>
            <span className="text-base text-[#1a2b49] leading-[22px]">
              {data.rating}
            </span>
            <span className="text-xs text-[#63687a] leading-[16px]">
              {data.reviewCount}
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button - only show when active and card has button */}
      {data.hasBookButton && (
        <motion.div 
          className="w-full px-[1px] overflow-hidden"
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={isActive ? { 
            height: "auto", 
            opacity: 1,
            marginTop: 4,
            transition: { 
              duration: 0.3,
              ease: "easeOut"
            }
          } : { 
            height: 0, 
            opacity: 0,
            marginTop: 0,
            transition: { 
              duration: 0.2,
              ease: "easeIn"
            }
          }}
        >
          <button className="w-full bg-[#0071eb] text-white text-sm font-medium rounded-full px-4 py-2 min-h-[36px] hover:bg-[#0060d1] transition-colors">
            Book now
          </button>
        </motion.div>
      )}
    </div>
  );
}

// Pagination Dots Component
interface PaginationProps {
  total: number;
  activeIndex: number;
}

function Pagination({ total, activeIndex }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`rounded-[10px] bg-[#63687a] transition-all ${
            index === activeIndex
              ? "w-2 h-2 opacity-100"
              : "w-[6px] h-[6px] opacity-50"
          }`}
        />
      ))}
    </div>
  );
}

// Swipe behavior types
type SwipeBehavior = "snap-center" | "free-scroll" | "snap-resistance";

// Main Gallery Component
export default function ExampleMobileCard() {
  const [activeIndex, setActiveIndex] = useState(0); // Start with first card
  const [swipeBehavior, setSwipeBehavior] = useState<SwipeBehavior>("snap-center");
  const [stiffness, setStiffness] = useState(300);
  const [damping, setDamping] = useState(30);
  const [momentum, setMomentum] = useState(1);
  const [showDebug, setShowDebug] = useState(true);
  const x = useMotionValue(0);
  
  const CARD_WIDTH = 312;
  const CARD_GAP = 12;
  const CARD_TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;
  const VIEWPORT_WIDTH = 393; // iPhone viewport width
  const CENTER_OFFSET = (VIEWPORT_WIDTH - CARD_WIDTH) / 2;

  // Calculate initial offset to center the first card
  useEffect(() => {
    // Center the first card on mount
    x.set(CENTER_OFFSET);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const currentX = x.get();

    if (swipeBehavior === "free-scroll") {
      // Free scroll - apply momentum to velocity
      const minX = CENTER_OFFSET - (cardData.length - 1) * CARD_TOTAL_WIDTH;
      const maxX = CENTER_OFFSET;
      
      // Apply momentum multiplier to velocity for more/less scroll distance
      const momentumVelocity = velocity * momentum * 0.5;
      const projectedX = currentX + momentumVelocity;
      const finalX = Math.max(minX, Math.min(maxX, projectedX));
      
      animate(x, finalX, {
        type: "spring",
        stiffness: stiffness,
        damping: damping,
        velocity: momentumVelocity,
      });
      
      // Update active index based on closest card
      const closestIndex = Math.round((CENTER_OFFSET - finalX) / CARD_TOTAL_WIDTH);
      setActiveIndex(Math.max(0, Math.min(cardData.length - 1, closestIndex)));
      return;
    }

    // Calculate which card should be centered (for snap modes)
    let newIndex = activeIndex;

    if (swipeBehavior === "snap-center") {
      // Standard carousel - snap one card at a time
      if (Math.abs(velocity) > 500 || Math.abs(offset) > CARD_WIDTH / 3) {
        if (offset > 0) {
          newIndex = Math.max(0, activeIndex - 1);
        } else {
          newIndex = Math.min(cardData.length - 1, activeIndex + 1);
        }
      }
    } else if (swipeBehavior === "snap-resistance") {
      // Snap with resistance - can peek, more sensitive to distance
      const dragRatio = (CENTER_OFFSET - currentX) / CARD_TOTAL_WIDTH;
      newIndex = Math.round(dragRatio);
      newIndex = Math.max(0, Math.min(cardData.length - 1, newIndex));
    }

    // Snap to the card position with proper centering
    const targetX = CENTER_OFFSET - newIndex * CARD_TOTAL_WIDTH;
    
    animate(x, targetX, {
      type: "spring",
      stiffness: stiffness,
      damping: damping,
    });

    setActiveIndex(newIndex);
  };

  // Calculate drag constraints to allow viewing all cards
  const dragConstraints = {
    left: CENTER_OFFSET - (cardData.length - 1) * CARD_TOTAL_WIDTH - 100,
    right: CENTER_OFFSET + 100,
  };

  // Adjust drag elastic based on behavior
  const dragElastic = swipeBehavior === "snap-resistance" ? 0.2 : swipeBehavior === "free-scroll" ? 0.05 : 0.1;

  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-white overflow-y-auto">
      {/* Safe area spacing for dynamic island */}
      <div className="h-[54px]" />

      {/* Main container */}
      <div className="flex flex-col items-center gap-6 py-4">
        {/* Gallery container */}
        <div className="w-full overflow-hidden relative">
          <motion.div
            drag="x"
            dragConstraints={dragConstraints}
            dragElastic={dragElastic}
            onDragEnd={handleDragEnd}
            style={{ x }}
            className="flex gap-3 cursor-grab active:cursor-grabbing"
          >
            {cardData.map((card, index) => (
              <CardLarge
                key={card.id}
                data={card}
                isActive={index === activeIndex}
              />
            ))}
          </motion.div>
        </div>

        {/* Pagination */}
        <Pagination total={cardData.length} activeIndex={activeIndex} />
      </div>

      {/* Debug UI Panel */}
      {showDebug && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-300 shadow-lg p-4 z-50">
          <div className="max-w-md mx-auto space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900">Debug Controls</h3>
              <button
                onClick={() => setShowDebug(false)}
                className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1 border border-gray-300 rounded"
              >
                Hide
              </button>
            </div>

            {/* Swipe Behavior */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Swipe Behavior
              </label>
              <select
                value={swipeBehavior}
                onChange={(e) => setSwipeBehavior(e.target.value as SwipeBehavior)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="snap-center">a) Snap to center (standard carousel)</option>
                <option value="free-scroll">b) Free scroll with momentum</option>
                <option value="snap-resistance">c) Snap with resistance (peek cards)</option>
              </select>
            </div>

            {/* Animation Parameters */}
            <div className="grid grid-cols-2 gap-4">
              {/* Stiffness */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Stiffness: {stiffness}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={stiffness}
                  onChange={(e) => setStiffness(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Soft</span>
                  <span>Stiff</span>
                </div>
              </div>

              {/* Damping */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Damping: {damping}
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={damping}
                  onChange={(e) => setDamping(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Bouncy</span>
                  <span>Smooth</span>
                </div>
              </div>
            </div>

            {/* Momentum Slider - Only for Free Scroll */}
            {swipeBehavior === "free-scroll" && (
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Momentum: {momentum.toFixed(1)}x
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.1"
                  value={momentum}
                  onChange={(e) => setMomentum(Number(e.target.value))}
                  className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Slow</span>
                  <span>Fast</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 italic">
                  Controls scroll distance from swipe velocity
                </p>
              </div>
            )}

            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Quick Presets
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setStiffness(300);
                    setDamping(30);
                    setMomentum(1);
                  }}
                  className="flex-1 px-3 py-2 text-xs bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300"
                >
                  Default
                </button>
                <button
                  onClick={() => {
                    setStiffness(150);
                    setDamping(15);
                    setMomentum(1.5);
                  }}
                  className="flex-1 px-3 py-2 text-xs bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300"
                >
                  Bouncy
                </button>
                <button
                  onClick={() => {
                    setStiffness(400);
                    setDamping(40);
                    setMomentum(0.7);
                  }}
                  className="flex-1 px-3 py-2 text-xs bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-300"
                >
                  Snappy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show Debug Button (when hidden) */}
      {!showDebug && (
        <button
          onClick={() => setShowDebug(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 z-50"
        >
          Show Debug
        </button>
      )}
    </div>
  );
}
