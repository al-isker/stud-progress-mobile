import { api } from '@/shared/api';
import { ILoginForm } from '../model/types/login-form';
import { ILoginResponse } from '../model/types/login-response';

const loginApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: build => ({
		login: build.mutation<ILoginResponse, ILoginForm>({
			query: body => ({
				url: 'auth/login',
				method: 'POST',
				body
			}),
			invalidatesTags: ['rating', 'grade', 'profile'],
			extraOptions: { loginQuery: true }
		})
	})
});

export const { useLoginMutation } = loginApi;
