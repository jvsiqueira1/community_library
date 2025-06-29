import cron from 'node-cron'
import moment from 'moment'
import sendReminderEmail from './email.service.js'
import loanRepository from '../repositories/loan.repositories.js'

cron.schedule('19 * * * *', async () => {
    console.log('Running daily job to check for due dates...')
    const loans = await loanRepository.findAllLoansRepository()
    const today = moment().startOf('day')
    loans.forEach(async (loan) => {
        const dueDate = moment(loan.dueDate).startOf('day')
        const reminderDueDate = moment(dueDate).subtract(1, "days")
        if(today.isSame(reminderDueDate)) {
            sendReminderEmail(loan.email, loan.title, loan.dueDate, loan.username)
        }
    })
})