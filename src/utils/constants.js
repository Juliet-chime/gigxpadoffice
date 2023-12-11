import usdt from '../assets/images/USDT.svg'
import bitcoin from '../assets/images/bitcoin.svg'

export const AUTH_TOKEN = '__API_TOKEN__'
export const REDIRECT_URL = '__REDIRECT_URL__'

export const revenueItem = ['fiat', 'crypto']

export const roles = [
    {
        role: 'Super Admin',
        user: 1,
    },
    {
        role: 'Administrator',
        user: 2,
    },
    {
        role: 'Developer',
        user: 1,
    },
    {
        role: 'Finance',
        user: 1,
    },
]

export const typeOptions = [
    {
        value: 'credit',
        label: 'Credit',
    },
    {
        value: 'debit',
        label: 'Debit',
    },
]

export const assestOptions = [
    {
        value: 'bitcoin',
        label: 'BitCoin',
    },
    {
        value: 'usd',
        label: 'USDT',
    },
]

export const statusOptions = [
    {
        value: 'success',
        label: 'Success',
    },
    {
        value: 'failed',
        label: 'Failed',
    },
    {
        value: 'pending',
        label: 'Pending',
    },
]

export const fiatCurrencyOptions = [
    {
        value: 'NGN',
        label: 'Naira',
    },
]

export const cryptoCurrencyOptions = [
    {
        value: 'USDT',
        label: 'USDT',
        logo: usdt,
    },
    {
        value: 'BTC',
        label: 'Bitcoin',
        logo: bitcoin,
    },
]

export const roleOptions = [
    {
        value: 'admininstrator',
        label: 'Administrator',
    },
    {
        value: 'finance',
        label: 'Finance',
    },
    {
        value: 'developer',
        label: 'Developer',
    },
]

export const billsPayment = [
    {
        value: 'electricity',
        label: 'Electricity',
    },
    {
        value: 'cable',
        label: 'Cable Television',
    },
    {
        value: 'airtime',
        label: 'Airtime & Data',
    },
    {
        value: 'betting',
        label: 'Sports & Gaming',
    },
]

export const feeOptions = [
    {
        value: 'percentage',
        label: 'Percentage',
    },
    {
        value: 'fixed',
        label: 'Fixed Rate',
    },
]

export const verify2FA =
    'A verification code has been sent to your email. Please check your inbox and enter the code to complete the login process.'
