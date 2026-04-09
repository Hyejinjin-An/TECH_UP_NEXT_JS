import {
  FaFire,
  FaDroplet as FaWaterdrop,
  FaLeaf,
  FaBolt as FaBoltLightning,
  FaMountain,
  FaSnowflake as FaCloudSnow,
  FaHandFist,
  FaSkull,
  FaEye,
  FaBug,
  FaDragon,
  FaMoon,
  FaHammer,
  FaFeather,
  FaStar,
  FaGhost,
  FaCircleDot
} from "react-icons/fa6";

// 포켓몬 타입 설정 객체
export const POKEMON_TYPES = {
  fire: {
    icon: FaFire,
    textClass: "text-red-600",
    bgClass: "bg-red-50",
    ringClass: "ring-red-200!",
    emoji: "🔥",
    displayName: "Fire"
  },
  water: {
    icon: FaWaterdrop,
    textClass: "text-blue-600",
    bgClass: "bg-blue-50",
    ringClass: "ring-blue-200!",
    emoji: "💧",
    displayName: "Water"
  },
  grass: {
    icon: FaLeaf,
    textClass: "text-green-600",
    bgClass: "bg-green-50",
    ringClass: "ring-green-200!",
    emoji: "🍃",
    displayName: "Grass"
  },
  electric: {
    icon: FaBoltLightning,
    textClass: "text-yellow-600",
    bgClass: "bg-yellow-50",
    ringClass: "ring-yellow-200!",
    emoji: "⚡",
    displayName: "Electric"
  },
  ice: {
    icon: FaCloudSnow,
    textClass: "text-cyan-600",
    bgClass: "bg-cyan-50",
    ringClass: "ring-cyan-200!",
    emoji: "❄️",
    displayName: "Ice"
  },
  fighting: {
    icon: FaHandFist,
    textClass: "text-orange-600",
    bgClass: "bg-orange-50",
    ringClass: "ring-orange-200!",
    emoji: "👊",
    displayName: "Fighting"
  },
  poison: {
    icon: FaSkull,
    textClass: "text-purple-600",
    bgClass: "bg-purple-50",
    ringClass: "ring-purple-200!",
    emoji: "☠️",
    displayName: "Poison"
  },
  ground: {
    icon: FaMountain,
    textClass: "text-yellow-700",
    bgClass: "bg-yellow-50",
    ringClass: "ring-yellow-300!",
    emoji: "🏔️",
    displayName: "Ground"
  },
  flying: {
    icon: FaFeather,
    textClass: "text-teal-600",
    bgClass: "bg-teal-50",
    ringClass: "ring-teal-200!",
    emoji: "🪶",
    displayName: "Flying"
  },
  psychic: {
    icon: FaEye,
    textClass: "text-pink-600",
    bgClass: "bg-pink-50",
    ringClass: "ring-pink-200!",
    emoji: "👁️",
    displayName: "Psychic"
  },
  bug: {
    icon: FaBug,
    textClass: "text-lime-600",
    bgClass: "bg-lime-50",
    ringClass: "ring-lime-200!",
    emoji: "🐛",
    displayName: "Bug"
  },
  rock: {
    icon: FaCircleDot,
    textClass: "text-yellow-800",
    bgClass: "bg-yellow-50",
    ringClass: "ring-yellow-300!",
    emoji: "🪨",
    displayName: "Rock"
  },
  ghost: {
    icon: FaGhost,
    textClass: "text-purple-500",
    bgClass: "bg-purple-50",
    ringClass: "ring-purple-200!",
    emoji: "👻",
    displayName: "Ghost"
  },
  dragon: {
    icon: FaDragon,
    textClass: "text-indigo-600",
    bgClass: "bg-indigo-50",
    ringClass: "ring-indigo-200!",
    emoji: "🐉",
    displayName: "Dragon"
  },
  dark: {
    icon: FaMoon,
    textClass: "text-gray-800",
    bgClass: "bg-gray-50",
    ringClass: "ring-gray-300!",
    emoji: "🌙",
    displayName: "Dark"
  },
  steel: {
    icon: FaHammer,
    textClass: "text-gray-600",
    bgClass: "bg-gray-50",
    ringClass: "ring-gray-200!",
    emoji: "⚙️",
    displayName: "Steel"
  },
  fairy: {
    icon: FaStar,
    textClass: "text-pink-500",
    bgClass: "bg-pink-50",
    ringClass: "ring-pink-200!",
    emoji: "✨",
    displayName: "Fairy"
  },
  normal: {
    icon: FaStar,
    textClass: "text-gray-600",
    bgClass: "bg-gray-50",
    ringClass: "ring-gray-200!",
    emoji: "⭐",
    displayName: "Normal"
  }
};

// 2026.04.08 add
// 타입 이름으로 설정을 가져오는 헬퍼 함수
export type PokemonTypeKey = keyof typeof POKEMON_TYPES;
export const getTypeConfig = (typeName: PokemonTypeKey) =>
{
  return POKEMON_TYPES[typeName]
}

// 2026.04.09
// 모든 타입 이름 배열 반환
export const getAllTypeNames = () => 
{
  return Object.keys(POKEMON_TYPES)
}