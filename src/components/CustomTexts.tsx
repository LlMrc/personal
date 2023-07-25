'use client';
type Props = {
  title: string,
  textStyles: string
}
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ( props: Props) => (
  <motion.p variants={textContainer} className={`font-normal text-[14px] text-secondary-white ${props.textStyles}`}>
    {Array.from(props.title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u00a0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ( props: Props)  => (
  <motion.h2 variants={textVariant2} initial="hidden" whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${props.textStyles}`}
  >
    {props.title}
  </motion.h2>
);
