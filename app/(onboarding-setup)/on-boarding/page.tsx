"use client"

import React, { useState } from 'react';
import SetupUserProfileComponent from "@/components/onboarding/SetupUserProfileComponent";
import GenreChoiceComponent from "@/components/onboarding/GenreChoiceComponent";
import VibeChoiceComponent from '@/components/onboarding/VibeChoiceComponent';
import UserTypeSelection from '@/components/onboarding/ChooseRoleComponent';

export default function RegistrationForm() {
	
	const [currentOnboardingStep, setCurrentOnboardingStep] = useState<number>(1);

	return (
		<div className="flex items-center justify-center min-h-screen bg-white">
			{ currentOnboardingStep === 1 && <SetupUserProfileComponent setCurrentOnboardingStep={setCurrentOnboardingStep} /> }
			{ currentOnboardingStep === 2 && <GenreChoiceComponent setCurrentOnboardingStep={setCurrentOnboardingStep} /> }
			{ currentOnboardingStep === 3 && <VibeChoiceComponent setCurrentOnboardingStep={setCurrentOnboardingStep} /> }
			{ currentOnboardingStep === 4 && <UserTypeSelection setCurrentOnboardingStep={setCurrentOnboardingStep} /> }
			
		</div>
	);
}