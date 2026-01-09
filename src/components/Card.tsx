"use client";

import Image from 'next/image';
import Link from 'next/link';
import { GridItem } from '../types/gridItem';
import FavouriteButton from './FavouriteButton';
import placeholder from '../assets/placeholder.svg';

const Card = ({ item, isRecipe }: { item: GridItem, isRecipe?: boolean }) => {
  
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[var(--bg-card)] transition-transform duration-300 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] cursor-pointer">
      <Link key={item.id} href={item.href} className="block h-full">
      <div className="relative h-70 overflow-hidden rounded-t-xl">
        <Image 
          className="rounded-t-xl w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          src={`${item.image}` || placeholder.src}
          alt={item.name}
          width={300}
          height={200}
        />
        { isRecipe &&
          <FavouriteButton recipe={item} />
        }
      </div>
      <div className="block h-full p-2 text-center bg-[var(--bg-card)]">
        <h5 className="mt-3 mb-6 text-xl font-semibold tracking-tight text-heading">{item.name}</h5>
      </div>
      </Link>
    </div>
  );
}

export default Card;