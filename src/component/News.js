import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import '../Styles/news.js'; 
import {
  Heading,
  GridLoader,
  GridContainer,
  Section,
  SearchInput,
  Category,
  Source,
  FilterContainer,
  SelectComponent,
  AuthorsFilter,
  DateInput,
} from '../Styles/news.js';


const News = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSources, setSelectedSources] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [authorsFilter, setAuthorsFilter] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(
          'https://content.guardianapis.com/search?api-key=3972b290-0458-42f9-b137-8a3a2e6b08af'
        );

        const response2 = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=70971cb08afc475594d69d69cec45268'
        );

        const response3 = await axios.get(
          'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=SI4pA6HGeQILlf91nqhxskLeABueVNLH'
        );

        const newsData = response1?.data?.response?.results || [];
        const headlinesData = response2?.data?.articles || [];
        const storiesData = response3?.data?.results || [];

        // Combine data from the three APIs
        const combinedData = [];

        // Merge data from The Guardian API
        newsData.forEach((article) => {
          const mergedArticle = {
            date: new Date(article.webPublicationDate),
            category: article.sectionName,
            source: 'The Guardian',
            authors: [],
          };
          combinedData.push(mergedArticle);
        });

        // Merge data from NewsAPI.org
        headlinesData.forEach((article) => {
          const mergedArticle = {
            date: new Date(article.publishedAt),
            category: 'Top Headlines',
            source: article.source.name,
            authors: [],
          };
          combinedData.push(mergedArticle);
        });

        // Merge data from New York Times API
        storiesData.forEach((story) => {
          const mergedArticle = {
            date: new Date(story.published_date),
            category: 'Top Stories (New York Times)',
            source: 'New York Times',
            authors: story.byline ? [story.byline] : [],
          };
          combinedData.push(mergedArticle);
        });

        combinedData.sort((a, b) => b.date - a.date);

        setCombinedData(combinedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const categories = [...new Set(combinedData.map(article => article.category))];
  const sources = [...new Set(combinedData.map(article => article.source))];

  const categoryOptions = categories.map(category => ({ value: category, label: category }));
  const sourceOptions = sources.map(source => ({ value: source, label: source }));

  const filteredData = combinedData.filter(article => (
    (searchKeyword === '' || article.category.toLowerCase().includes(searchKeyword.toLowerCase()) || article.source.toLowerCase().includes(searchKeyword.toLowerCase())) &&
    (selectedCategories.length === 0 || selectedCategories.includes(article.category)) &&
    (selectedSources.length === 0 || selectedSources.includes(article.source)) &&
    (!filterDate || new Date(article.date).toDateString() === new Date(filterDate).toDateString()) &&
    (authorsFilter === 'All' || article.authors.includes(authorsFilter))
  ));

  return (
    <div>
      <Heading>News Article Website</Heading>
      <div className="filters">
        <SearchInput
          type="text"
          placeholder="Search by keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        <FilterContainer>
          <SelectComponent>
            <Select
              isMulti
              value={selectedCategories.map((category) => ({ value: category, label: category }))}
              onChange={(selectedOptions) =>
                setSelectedCategories(selectedOptions.map((option) => option.value))
              }
              options={categoryOptions}
              placeholder="Select Categories"
            />
          </SelectComponent>

          <SelectComponent>
            <Select
              isMulti
              value={selectedSources.map((source) => ({ value: source, label: source }))}
              onChange={(selectedOptions) =>
                setSelectedSources(selectedOptions.map((option) => option.value))
              }
              options={sourceOptions}
              placeholder="Select Sources"
            />
          </SelectComponent>

          <AuthorsFilter>
            <select
              value={authorsFilter}
              onChange={(e) => setAuthorsFilter(e.target.value)}
            >
              <option value="All">All Authors</option>
              {combinedData
                .flatMap((article) => article.authors)
                .filter((author, index, self) => author && self.indexOf(author) === index)
                .map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
            </select>
          </AuthorsFilter>

          <DateInput
            type="date"
            placeholder="Filter by Date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />
        </FilterContainer>
      </div>

      {isLoading ? (
        <GridLoader>Loading...</GridLoader>
      ) : (
        <GridContainer>
          {filteredData.map((article, index) => (
            <Section key={index} className={`section section-${article.source.toLowerCase()}`}>
              <Category>{article.category}</Category>
              <p>Date: {article.date.toLocaleString()}</p>
              <Source>Source: {article.source}</Source>
              {article.authors.length > 0 && (
                <p className="author">Authors: {article.authors.join(', ')}</p>
              )}
            </Section>
          ))}
        </GridContainer>
      )}
    </div>
  );
};
export default News;