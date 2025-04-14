# TravelAPI
This project provides an automated testing framework for the Tripadvisor16 API, focusing on validating endpoints related to hotels, restaurants, and attractions.

It also includes integration with Jenkins for continuous integration, enabling automated test execution as part of the CI/CD pipeline.

## Clone the Repository
```bash
git clone https://github.com/lavanyapetchetti/TravelAPI.git
cd TravelAPI
```

## Getting Started

This project requires a `.env` file for configuration. Follow these steps to set it up:
1. Create a .env file in the root directory and add your RapidAPI key:
```bash
 touch .env 
 ```

2. Configure Environment Variables:

Open the .env file in text editor and add the required API keys. For Example
``` bash
API_KEY='XXX'
```
Install Dependencies
``` bash
npm install
```

## Running tests on your laptop
```bash
npm test
```
