import React, { useState, useRef } from 'react';
import { Flex, Box, Select, Text, Icon, Grid } from '@chakra-ui/core';
import { navigate } from 'gatsby';
import Seo from '../components/Seo';
import books from '../data/books.json';

export default function ChapterTemplate({ pageContext: { locale, book, totalChapters, chapter, verses } }) {
  const [selected, setSelected] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const playingAudio = useRef();
  const changeBook = (book) => {
    navigate(`/${locale}/${book}/1`);
  };
  const changeChapter = (index) => {
    navigate(`/${locale}/${book}/${index}`);
  };
  const highlightVerse = (verse) => {
    if (selected.length > 0) {
      const last = selected[selected.length - 1];
      if (last === verse) {
        selected.pop();
      } else if (last > verse) {
        for (let i = last; i >= verse; i--) {
          selected.pop();
        }
      } else if (last < verse) {
        for (let i = last + 1; i <= verse; i++) {
          selected.push(i);
        }
      }
    } else {
      selected.push(verse);
    }
    setSelected([...selected]);
  };
  const isHighlighted = (verse) => selected.includes(verse);
  const playAudio = async () => {
    if (playing) {
      setPlaying(false);
      if (playingAudio.current) {
        playingAudio.current.pause();
        playAudio.current = null;
      }
    } else {
      setPlaying(true);
      for (const i of selected) {
        await new Promise((resolve) => {
          const url = require(`../assets/audio/female/${book}/chapter_${chapter}/verse_${i + 1}.mp3`);
          const audio = new Audio(url);
          audio.loop = false;
          audio.play();
          audio.addEventListener('ended', resolve);
          playingAudio.current = audio;
        });
      }
      setPlaying(false);
    }
  };
  const selectItems = [];
  for (let i = 0; i < totalChapters; i++) {
    selectItems.push(i + 1);
  }
  const displayMenu = showMenu ? 'flex' : 'none';
  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <Flex height="100%">
      <Seo title={`${capitalize(locale)} Bible ${book} - Chapter ${chapter} audio`} keywords={[locale, 'bible', 'chapter', `${chapter}`, 'audio']} />
      <Box display={[displayMenu, displayMenu, 'flex', 'flex']} bg="#faf8f7" overflow="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={0}>
          {books.map((book) => (
            <Box key={book} p={2} cursor="pointer" onClick={() => changeBook(book)}>
              <Text color="black" fontSize="sm">
                {book}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Flex flex={1} display={showMenu ? 'none' : 'flex'} direction="column" padding={[1, 1, 5, 5]} bg="white" border="1px solid #dddcda">
        <Flex direction="row" borderBottom="1px solid #dddcda">
          <Flex flex={1} align="center" ml={1}>
            <Box display={['flex', 'flex', 'none', 'none']}>
              <Icon name="menu" color="black" focusable={true} cursor="pointer" size="32px" mr={4} onClick={() => setShowMenu(!showMenu)} />
            </Box>
            <Text color="black" fontSize="xl" fontWeight="bold">
              {book}
            </Text>
          </Flex>
          <Flex direction="row" align="center">
            {selected.length > 0 ? (
              <Icon
                name={playing ? 'stop' : 'play'}
                color="black"
                focusable={true}
                cursor="pointer"
                size="32px"
                marginRight={4}
                onClick={() => playAudio()}
              />
            ) : null}
            <Text display={['none', 'none', 'flex', 'flex']} color="black" fontSize="md">
              Chapter
            </Text>
            <Select
              size="md"
              color="black"
              focusBorderColor="transparent"
              border="none"
              value={chapter}
              onChange={(e) => changeChapter(e.target.value)}
            >
              {selectItems.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
        <Flex flex={1} direction="column" overflowY="auto" borderBottom="1px solid #dddcda">
          {verses.map((verse, index) => (
            <Box key={index} marginTop="10px">
              <Flex direction="row" align="flex-start" backgroundColor={isHighlighted(index) ? '#FFFF00' : 'white'}>
                <Text color="black" fontSize="xs" marginTop="5px" marginRight="5px" marginLeft={index < 9 ? '7px' : ''}>
                  {index + 1}
                </Text>
                <Text color="black" fontSize="md" cursor="pointer" onClick={() => highlightVerse(index)}>
                  {verse}
                </Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
