import { useEffect, useRef, useState } from 'react'
import { CATEGORIES, DATESOPTIONS, EXPERIENCE_LEVELS, ORDERS, REMOTE_OPTIONS, SALARY_RANGES, TYPES } from '../../utils/config'
import Dropdown from './dropdown'
import styles from './filters.module.scss'

const Filters = props => {
  const [selectedCategories, setSelectedCategories] = useState(props.boardFilters?.categories?.map(category => category.value))
  const [selectedTypes, setSelectedTypes] = useState(props.boardFilters?.types?.map(type => type.value))
  const [selectedOrder, setSelectedOrder] = useState(ORDERS.filter(order => order.orderBy === props.boardFilters?.orderBy && order.sortBy === props.boardFilters?.sortBy)[0])
  const [selectedRangeDate, setSelectedRangeDate] = useState(DATESOPTIONS.filter(date => date.value === props.boardFilters?.date_range_min)[0])
  const [selectedSalaryRange, setSelectedSalaryRange] = useState(null)
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState(null)
  const [selectedRemoteOption, setSelectedRemoteOption] = useState(null)
  const isMounted = useRef(false);

  useEffect(() => {
    setSelectedCategories(props.boardFilters.categories.map(category => category.value))
    setSelectedTypes(props.boardFilters.types.map(type => type.value))
  }, [])

  useEffect(() => {
    if(props.scoringChecked) {
		  setSelectedOrder({ label: "Recommandation décroissante", sortBy: "scoring", orderBy: "desc" })
		} else {
		  setSelectedOrder({ label: "Recherche décroissante", sortBy: "searching", orderBy: "desc" })
		}
  }, [props.scoringChecked])

  useEffect(() => {
    if(isMounted.current) {
      const salaryFilter = selectedSalaryRange 
        ? { min: selectedSalaryRange.value.split('-')[0], max: selectedSalaryRange.value.split('-')[1] }
        : null;
      
      const experienceFilter = selectedExperienceLevel
        ? { min: selectedExperienceLevel.value.split('-')[0], max: selectedExperienceLevel.value.split('-')[1] }
        : null;
      
      const remoteFilter = selectedRemoteOption ? selectedRemoteOption.value : null;
      
      props.fetchJobs({
        ...props.boardFilters,
        categories: selectedCategories.map(category =>  {
          return { name: 'line_of_business', value: category }
        }),
        types: selectedTypes.map(type =>  {
          return { name: 'contract', value: type }
        }),
        salary_min: salaryFilter?.min || null,
        salary_max: salaryFilter?.max || null,
        experience_min: experienceFilter?.min || null,
        experience_max: experienceFilter?.max || null,
        remote: remoteFilter
      })
    } else {
      isMounted.current = true;
    }
  }, [selectedCategories, selectedTypes, selectedSalaryRange, selectedExperienceLevel, selectedRemoteOption])

  const ChangeSelectedCategriesHandler = item => {
    setSelectedCategories(prevCategories => {
      if ([...prevCategories].indexOf(item) === - 1) {
        return [
          ...prevCategories,
          item
        ]
      }
      return [...prevCategories].filter(cat => cat !== item )
    })
  }

  const ChangeSelectedTypesHandler = item => {
    setSelectedTypes(prevTypes => {
      if ([...prevTypes].indexOf(item) === - 1) {
        return [
          ...prevTypes,
          item
        ]
      }
      return [...prevTypes].filter(type => type !== item )
    })
  }

  const ChangeSelectedOrderHandler = item => {
    setSelectedOrder(item)
    props.fetchJobs({...props.boardFilters, orderBy: item.orderBy, sortBy: item.sortBy  })
  }

  const ChangeSelectedSalaryRangeHandler = item => {
    setSelectedSalaryRange(item)
  }

  const ChangeSelectedExperienceLevelHandler = item => {
    setSelectedExperienceLevel(item)
  }

  const ChangeSelectedRemoteOptionHandler = item => {
    setSelectedRemoteOption(item)
  }

  const ChangeSelecedDateRangeHandler = item => {
    setSelectedRangeDate(item)
    props.fetchJobs({...props.boardFilters, date_range_min: item.value  })
  }

  // Function to clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedTypes([])
    setSelectedOrder({ label: "Recommandation décroissante", sortBy: "scoring", orderBy: "desc" })
    setSelectedRangeDate(DATESOPTIONS[0])
    setSelectedSalaryRange(null)
    setSelectedExperienceLevel(null)
    setSelectedRemoteOption(null)
    
    // Reset the filters in the parent component
    props.fetchJobs({
      ...props.boardFilters,
      categories: [],
      types: [],
      orderBy: "desc",
      sortBy: "scoring",
      date_range_min: DATESOPTIONS[0].value,
      salary_min: null,
      salary_max: null,
      experience_min: null,
      experience_max: null,
      remote: null
    })
  }

  // Check if any filters are active
  const hasActiveFilters = () => {
    return selectedCategories.length > 0 || 
           selectedTypes.length > 0 || 
           (selectedRangeDate && selectedRangeDate.value !== DATESOPTIONS[0].value) ||
           selectedSalaryRange !== null ||
           selectedExperienceLevel !== null ||
           selectedRemoteOption !== null
  }

  return (
    <div className={styles.filters}>
      <div className={styles.filters__dropdowns}>
        <Dropdown options={CATEGORIES} onChangeSelected={ChangeSelectedCategriesHandler} selectedItems={selectedCategories} title="Categories" />
        <Dropdown options={TYPES} onChangeSelected={ChangeSelectedTypesHandler} selectedItems={selectedTypes} title="Contracts" />
        <Dropdown options={SALARY_RANGES} onChangeSelected={ChangeSelectedSalaryRangeHandler} selectedItems={selectedSalaryRange} title="Salaire" />
        <Dropdown options={EXPERIENCE_LEVELS} onChangeSelected={ChangeSelectedExperienceLevelHandler} selectedItems={selectedExperienceLevel} title="Expérience" />
        <Dropdown options={REMOTE_OPTIONS} onChangeSelected={ChangeSelectedRemoteOptionHandler} selectedItems={selectedRemoteOption} title="Télétravail" />
        {/* <Dropdown options={DATESOPTIONS} selectedItems={selectedRangeDate} onChangeSelected={ChangeSelecedDateRangeHandler} title="Publié il y a" /> */}
        <Dropdown options={ORDERS} selectedItems={selectedOrder} onChangeSelected={ChangeSelectedOrderHandler} title={selectedOrder && selectedOrder.label || 'Trier par'} />
      </div>
      {hasActiveFilters() && (
        <button className={styles.clearFilters} onClick={clearAllFilters}>
          Clear All Filters
        </button>
      )}
    </div>
  )
}

export default Filters