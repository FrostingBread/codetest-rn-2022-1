import React from 'react';
import IAssessmentData from '~/model/assessmentData';
import IChallengeData from '~/model/challengeData';
import User from '~/model/user';

/// user data
const userA: User = {firstName: 'David', lastName: 'Tam', uid: 1234};

/// username and password
const userACredential = {userName: 'test', userPassword: 'test'};

/// Assessment data
const assessmentData: IAssessmentData[] | null[] = [
  {
    name: 'Assessment A',
    image: 'https://via.placeholder.com/150',
    point: 200,
  },
  {
    name: 'Assessment B',
    image: 'https://via.placeholder.com/150',
    point: 500,
  },
];

/// Challenges data
/// MM/DD/YYYY
const challengesData: IChallengeData[] | null[] = [
  {
    name: 'Challenge A',
    image: 'https://via.placeholder.com/150',
    dueDate: new Date('7/31/2022'),
    point: 0,
  },
  {
    name: 'Challenge B',
    image: 'https://via.placeholder.com/150',
    dueDate: new Date('8/21/2022'),
    point: 100,
  },
  {
    name: 'Challenge B',
    image: 'https://via.placeholder.com/150',
    dueDate: new Date('9/23/2022'),
    point: 200,
  },
  {
    name: 'Challenge D',
    image: 'https://via.placeholder.com/150',
    dueDate: new Date(new Date('1/1/2023')),
    point: 999,
  },
];

export {userA, userACredential, challengesData, assessmentData};
