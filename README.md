# Project Overview

This project involves the refactoring and enhancement of an existing web application. The primary goals are to make the code cleaner, more user-friendly, and to improve its functionality. The enhancements include converting the application from Vue 2 to Vue 3, creating manageable single functionality components, implementing pagination, color-coding the table based on the "Status" column, and optionally, adding a search bar for filtering rows based on specific criteria.


# Progress

## Refactoring
the codebase has been thoroughly refactored to improve its readability and maintaiability. Unnecessary code and redunancies have been mostly removed while striving to make it as generic as possible for easy expansion.

## Migration:
The application has been successfully migrated from Vue 2 to Vue 3, taking advantage of the latest features and performance improvements.

- challenging part: It was hard to find the set of npm library versions for vue3 and plugin-vue that does not make dependency conflict. One possible solution was using npm install --legacy-peer-deps or npm install --force, but since these comments might have some side-effects like completely ignoring all peerDependencies without pinning on file package-lock.json,  I resolved it by looking at the version of other vue3 project.

## Single Functionality Components:
The existing application's single component have been restructured to create manageable single functionality components. This enhances code modularity and makes it easier to work on specific parts of the application.

## Pagination with Ellipsis: 
Pagination has been implemented to display 100 rows per page, and it includes ellipsis (...) to limit the number of displayed pages. It displays 11 pages Maximum. This enhances the user experience, making it easier to navigate through large datasets while keeping the pagination controls neat and user-friendly. It implemented in a way that it could be easily changed the number of items per page by updating single line of code. Moreover, The pagination component get updated whenever any of new filters get applied; it recalculates the number of pages and it return to the first page.

- Interesting Part: Once I added pagination, I noticed that the table were no longer sorted by Status and the number of Cores. It was just sorted within the page. Realizing that sorting them would enhance the user interface, I proceeded to implement this feature by sorted the given data first."

## Color Coding:
 At first, I thought about using different CSS classes for different statuses. But I realized that if we added new statuses, we'd have to create new CSS classes manually each time. So, instead, I created a color generator that's based on the status name. It generates a unique RGB color for each status. This way, even if we add new statuses for the product, it can handle them automatically without us having to do anything extra.

## Search Bar: 
An optional search bar has been added to the application. Users can filter rows based on specific criteria. The search bar allows users to:

Column Selection: Users have the option to pick the exact columns for their search. I typically avoid relying on third-party libraries to prevent unnecessary dependencies. However, given the project's limited timeframe and its mock nature, I chose to utilize the https://github.com/vueform/multiselect library for this feature. This decision aimed to demonstrate my capability not only in building components but also in incorporating third-party libraries when needed. Although this library has triggered two warnings in the console, had I had more time, I would have developed this functionality in-house for our team.

Substring Matching: Rows that contain the input field's value as a substring in the selected columns will be displayed.
Consider Hidden Status: The search functionality takes into account any hidden status criteria, ensuring accurate filtering based on all conditions. Initially, I designed the system to update the entire table every time the input field changed. However, I soon recognized that this approach was computationally heavy and not user-friendly. To improve efficiency, I modified the system to update the table only when the user either presses "Enter" after typing a value or clears the input field. This change ensures a smoother user experience and reduces unnecessary data updates.

## State Management
During the process of breaking down a large component into several smaller components, I recognized that effective state management would be crucial for the success of this project. After conducting extensive research to find a solution that would simplify the complexity of state management, I opted for Pinia.

Pinia has proven to be an excellent choice for managing the application's state, as it allows for organized and efficient state handling. It enables seamless updates of connected components when a relevant state changes, without causing code entanglement or unnecessary re-renders, resulting in a more streamlined and optimized user interface.

## Code standards
As I had no prior experience with Vue, my initial focus was on rapidly learning it and implementing the features, without strict adherence to Vue 3's coding standards. Over the course of this project, I gradually became more comfortable with Vue 3 and its operational principles. This growing familiarity enabled me to successfully implement all the desired features I had envisioned when I started the project. Subsequently, I took on the task of code cleanup, and I am confident that the folder structures and codebase are now well-organized and in alignment with best practices.


## Installation
- npm install
- npm run dev

## Comment
Thank you so much for providing me with the opportunity to learn Vue 3. I'm eagerly anticipating your feedback and suggestions for improvement, as they represent another valuable learning opportunity for me.

## I am really looking forward to working with you!
